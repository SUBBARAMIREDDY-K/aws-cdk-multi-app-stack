#!/bin/bash

#Switch User to the root user
sudo su
# Update package lists
yum update -y

# Install Apache
yum install httpd -y


sudo systemctl enable httpd
# Start and enable Apache
sudo systemctl start httpd


echo "<h1>Hello from AWS CDK for Multi Stack</h1>" > /var/www/html/index.html


