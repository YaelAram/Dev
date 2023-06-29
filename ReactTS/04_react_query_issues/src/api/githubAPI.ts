import axios from 'axios';

export const githubAPI = axios.create({
  baseURL: 'https://api.github.com/repos/facebook/react',
  headers: {
    Authorization: 'Bearer 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'
  }
});
