4/27/2023 
# Cloud-Resume  [![Update Website](https://github.com/Warner-Bell/cloud-resume-challenge/actions/workflows/frontend-cicd.yaml/badge.svg)](https://github.com/Warner-Bell/cloud-resume-challenge/actions/workflows/frontend-cicd.yaml)

[![Destroy Site](https://github.com/Warner-Bell/cloud-resume-challenge/actions/workflows/siteDestroy.yaml/badge.svg)](https://github.com/Warner-Bell/cloud-resume-challenge/actions/workflows/siteDestroy.yaml) 

https://warnerbell.com

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
I'll be obtaining a SSL/TLS certificate from AWS Certificate Manager to authenticates the website's identity and enable an encrypted connections. AWS Certificate Manager (ACM) is a service that lets you easily provision, manage, and deploy public and private Secure Sockets Layer/Transport Layer Security (SSL/TLS) certificates for use with AWS services and your internal connected resources.

### 6. DNS
I'll use route53 hosted zones to create DNS records that alias to a cloudfront distibution, and CNAMEs for the certificate. Amazon Route 53 is a highly available and scalable Domain Name System (DNS) web service. Route 53 connects user requests to internet applications running on AWS or on-premises.

### 7. Javascript
I'll use javascript to code the visits counter for the cloud potfolio frontend. JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc.

### 8. Database
I'll use AWS Dynamodb as the database for the sites visits counter. Amazon DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability. DynamoDB lets you offload the administrative burdens of operating and scaling a distributed database so that you don't have to worry about hardware provisioning, setup and configuration, replication, software patching, or cluster scaling.
### 9. API
For the Api requirement of the challenge I went with Lambda [Url](https://docs.aws.amazon.com/lambda/latest/dg/lambda-urls.html). A function URL is a dedicated HTTP(S) endpoint for your Lambda function. You can create and configure a function URL through the Lambda console or the Lambda API. When you create a function URL, Lambda automatically generates a unique URL endpoint for you. Once you create a function URL, its URL endpoint never changes.
### 10. Python
The code for the lambda function wich retrieves and updates the views in the dynamodb database I'll write in python. Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. Its high-level built in data structures, combined with dynamic typing and dynamic binding, make it very attractive for Rapid Application Development, as well as for use as a scripting or glue language to connect existing components together.
### 11. Tests
Testing I'm gonna just play by ear, I don't thing much thought will be required here as there will be plenty of testing in the buld process itself.
### 12. Infrastructure as Code
I'm building ClordFormation templates for key components of the site, and writing bash scripts to deploy them. I'll use AWS CDK and or AWS SAM for small deplyments and testing. Infrastructure as Code (IaC) is the managing and provisioning of infrastructure through code instead of through manual processes.
### 13. Source Control
For source control I chose GitHub, an Internet hosting service for software development and version control using Git. It provides the distributed version control of Git plus access control, bug tracking, software feature requests, task management, continuous integration, and wikis for every project.
### 14. CI/CD (Back end)
I combined the CI/CD of both the frontend and backend into one process using github actions. GitHub actions allow you to Automate, customize, and execute your software development workflows right in your repository with GitHub Actions.
### 15. CI/CD (Front end)
For continuous integration and continuous deployment of my portfolio website I will be using GitHub actions. GitHub actions allow you to Automate, customize, and execute your software development workflows right in your repository with GitHub Actions.

I wrote a GitHub .yaml file using [Workflow syntax for GitHub Actions](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_iduses) with a customization for security that will update my portfolio website upon push from the local repo.
### 16. Blog post
As I thought about how I would tackle the blog post describing my experience with the cloud-resume-challenge it occurred to me that this very README could serve as a pretty decent blog post on the subject, but as I do, I elected to go a bit further and detail my experience in a Medium.com post, that said ccheck it out [here](https://medium.com/@Warner_Bell/taking-on-the-cloud-resume-challenge-my-experience-898e78e49b61).

5/16/2023
