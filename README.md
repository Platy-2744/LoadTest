## DOS Lab
#### CP KKU : Infomation and Cybersecurity 2/2568

##### Tech Stack

* Docker
* k6 (Load Testing Tool)
* Node.js Application (Juice Shop)
* JavaScript (k6 script)

##### Prerequisites
* Docker Desktop
* Port 3000

##### Running
1. Run Juice Shop Container (Limited Resource)
```Bash
docker run -d --name juice_shop --cpus="1" --memory="128m" -p 3000:3000 bkimminich/juice-shop
```

2. Go to http://localhost:3000

3. Running Load Test (k6 via Docker)
Windows (CMD)
```Bash
docker run --rm -i --name k6 -v %cd%:/scripts grafana/k6 run /scripts/dos.js
```

##### Test result
  █ TOTAL RESULTS

    checks_total.......: 51709  254.607592/s
    checks_succeeded...: 89.79% 46431 out of 51709
    checks_failed......: 10.20% 5278 out of 51709

    ✗ status is 200
      ↳  89% — ✓ 46431 / ✗ 5278

    HTTP
    http_req_duration..............: avg=8.69s min=-608355ns med=1.46s max=59.93s p(90)=59.83s p(95)=59.85s
      { expected_response:true }...: avg=2.87s min=-608355ns med=1.34s max=59.31s p(90)=5.28s  p(95)=6.18s
    http_req_failed................: 10.20% 5278 out of 51709
    http_reqs......................: 51709  254.607592/s

    EXECUTION
    iteration_duration.............: avg=9.57s min=1s        med=2.46s max=1m1s   p(90)=1m1s   p(95)=1m1s
    iterations.....................: 51553  253.83947/s
    vus............................: 1      min=1             max=8000
    vus_max........................: 8000   min=8000          max=8000

    NETWORK
    data_received..................: 3.5 GB 17 MB/s
    data_sent......................: 4.4 MB 22 kB/s




running (3m23.1s), 0000/8000 VUs, 51553 complete and 2992 interrupted iterations
default ✓ [ 100% ] 0000/8000 VUs  3m0s