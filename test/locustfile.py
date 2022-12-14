from locust import HttpUser, task, between

class HelloWorldUser(HttpUser):
    wait_time = between(0.5, 2.5)

    @task
    def hello_world(self):
        self.client.get('/home')
        self.client.get('/users/data')
        self.client.get('/users/attendance')
        self.client.get('/users/attendance/time')
        self.client.get('/users/attendance/days')
        self.client.get('/users/salary')
