import { SubmissionError } from 'redux-form';

export const post = async (operation, request) => {
  const response = await fetch(operation, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(request)
  });

  const body = await response.json();
  return handleResponse(body);
};

const handleResponse = response => {
  switch (response.status) {
    case 200:
      return response;
    case 400:
      const submissionErrors = { _error: response.error.message };

      response.error.validationErrors.forEach(error => {
        submissionErrors[error.field] = error.code;
      });

      throw new SubmissionError(submissionErrors);
    default:
      throw new SubmissionError({ _error: 'general error' });
  }
};
