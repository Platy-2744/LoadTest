import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 500 },
    { duration: '30s', target: 1000 },
    { duration: '30s', target: 2000 },
    { duration: '30s', target: 4000 },
    { duration: '30s', target: 8000 },
    { duration: '30s', target: 0 },
  ],
};

export default function () {
  let res = http.get('http://host.docker.internal:3000');

  check(res, {
    'status is 200': (r) => r.status === 200,
  });

  sleep(1);
}