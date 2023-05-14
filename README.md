4/27/2023 
# Cloud-Resume

https://coming-soon.com

## Project Background
I recently happened accross the concept of this challenge and thought :astonished:"That looks like a fun/useful little project I can do to learn and play in the cloud!"

I found all the info [here.](https://cloudresumechallenge.dev/)  There's a book, a site and apparently a whole community surrounding this idea, I learned all the particulars by sniffing around there, but by then I had already determined I was gonna do this thing my way! :sunglasses: (but stick to the outline)
  
I had previously created a "Secure Static Website on AWS" just as a lab project and tutorial for my youtube channel [@cloudoptimized](https://www.youtube.com/@cloudoptimized?sub_confirmation=1). 

That [project](https://youtu.be/gnj4yEO4I0I) was created using the AWS console only, I'm gonna do as much of this one as I can in "Infrastructure as Code". 

![download](https://user-images.githubusercontent.com/100949697/235042052-0db3afd3-d34f-49ee-9f2f-d732d9568cbb.jpg)

Whatever it is I'll be doing it with a smile...mostly..lol



## Project Components
### 1. Certifications

![aws-certified-cloud-practitioner(1)](https://user-images.githubusercontent.com/100949697/235172685-ecf165f9-2e84-4cf7-b776-242bd4700a0e.png)
![aws-certified-sysops-administrator-associate(1)](https://user-images.githubusercontent.com/100949697/235172729-3bfa0560-06e0-4212-b743-0e3112a2ce23.png)
![aws-certified-solutions-architect-associate(1)](https://user-images.githubusercontent.com/100949697/235172769-80d0842f-a255-4844-818a-217d96e55eef.png)
![microsoft-certified-azure-fundamentals(1)](https://user-images.githubusercontent.com/100949697/235172811-ed49608a-6125-407a-bf4f-66b9005efa3b.png)

### 2. HTML

For my HTML you'll see an example of a basic configuration resume with basic HTML within this code base but for the actual website I will be re-vamping one of the free sample site templates from [HTML5UP](https://html5up.net/). They have some amazing offerings 100% FREE! under their [creative commons](https://html5up.net/license). You can even get some custom attibution-free stuff, they are worth a look.

### 3. CSS

Same deal with the CSS, you'll see an example of a basic configuration resume with basic CSS within this code base but for the actual website I will be modifying a template from HTML5UP.

### 4. Static Website

This will be a fully responsive static portfolio website. The FQDN will be registered using AWS ACM and hosted on AWS S3, essentially re-creating [this](https://medium.com/@Warner_Bell/build-a-secure-static-website-using-s3-cloudfront-acm-and-route-53-ab1a0aee1ef9) project, but I will be using AWS CLI, CDK, and infrastructure as code for this one, following the structure layed out by the cloud resume challenge where possible.

### 5. HTTPS
I'll be obtaining a SSL/TLS certificate from AWS Certificate Manager to authenticates the website's identity and enable an encrypted connections.

### 6. DNS
I'll use route53 hosted zones to create DNS records that alias to a cloudfront distibution, and CNAMEs for the certificate.

### 7. Javascript

### 8. Database
I'll use AWS Dynamodb as the database for the sites visits counter.
### 9. API
For the Api requirement of the challenge I went with Lambda [Url](https://docs.aws.amazon.com/lambda/latest/dg/lambda-urls.html). A function URL is a dedicated HTTP(S) endpoint for your Lambda function. You can create and configure a function URL through the Lambda console or the Lambda API. When you create a function URL, Lambda automatically generates a unique URL endpoint for you. Once you create a function URL, its URL endpoint never changes.
### 10. Python
The code for the website views counter was writtenin python.
### 11. Tests
### 12. Infrastructure as Code
I'm building ClordFormation templates for key components of the site, and writing bash scripts to deploy them. I use AWS CDK and AWS SAM for small deoplyments and testing. 
### 13. Source Control
For source control I chose GitHub, an Internet hosting service for software development and version control using Git. It provides the distributed version control of Git plus access control, bug tracking, software feature requests, task management, continuous integration, and wikis for every project.
### 14. CI/CD (Back end)
### 15. CI/CD (Front end)
For this requirement of the challenge I will be using GitHub actions. GitHub actions allow you to Automate, customize, and execute your software development workflows right in your repository with GitHub Actions.

I wrote a GitHub .yaml file using [Workflow syntax for GitHub Actions](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_iduses) with a customization for security that will update my portfolio website upon push from the local repo.
### 16. Blog post
