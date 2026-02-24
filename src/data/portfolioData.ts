export const portfolioData = {
    personalInfo: {
        name: "Akash Potraje",
        title: "DevOps Engineer | Cloud & Kubernetes Specialist",
        shortBio: "4+ years experience in AWS, GCP, CI/CD, Kubernetes, Terraform, and Observability. Specializing in secure, scalable, and reliable cloud infrastructure for OTT and FinTech platforms.",
        email: "akash.potraje@example.com", // Please update with actual email
        linkedin: "https://www.linkedin.com/in/akash-potraje-73bb131a1/",
        github: "https://github.com/shadowaks",
        location: "Remote / India", // Update as needed
    },

    about: `I am a DevOps Engineer with over 4 years of hands-on experience designing, implementing, and managing cloud infrastructure on AWS and GCP. I specialize in building robust CI/CD pipelines, container orchestration with Docker and Kubernetes, infrastructure as code using Terraform, and comprehensive monitoring/observability setups. I bring an automation-first mindset to operations, focusing on reliability, scalability, and cloud security. I have specific expertise in high-demand environments, including large-scale OTT and secure FinTech projects.`,

    skills: {
        cloud: ["AWS", "GCP"],
        devops: ["Docker", "Kubernetes", "Terraform", "Jenkins", "GitHub Actions", "GitLab CI"],
        monitoring: ["Prometheus", "Grafana", "ELK Stack", "CloudWatch"],
        security: ["IAM", "WAF", "VPN", "SSL/TLS", "GuardDuty"],
        databases: ["MongoDB", "MySQL", "PostgreSQL"],
        languages: ["Bash", "Python", "YAML", "HCL"]
    },

    experience: [
        {
            role: "DevOps Engineer",
            company: "Tudip Technologies Pvt Ltd",
            duration: "Dec 2020 – Present",
            description: "Managing and optimizing cloud infrastructure across multiple high-stakes projects. Driving automation, cost-optimization, and security improvements.",
            achievements: [
                "Architected scalable infrastructure for OTT and IoT/FinTech platforms.",
                "Implemented end-to-end CI/CD pipelines reducing deployment times significantly.",
                "Managed Kubernetes clusters (EKS) ensuring high availability and zero-downtime deployments.",
                "Set up comprehensive monitoring and alerting using Prometheus, Grafana, and the ELK stack.",
                "Enforced robust cloud security using WAF, IAM policies, and automated vulnerability scanning."
            ]
        }
    ],

    projects: [
        {
            title: "OTT Platform Infrastructure",
            description: "Designed and maintained highly scalable infrastructure for a video streaming platform.",
            techStack: ["AWS ECS", "Terraform", "Kong API Gateway", "CI/CD", "AWS WAF", "GuardDuty"],
            challenges: "Ensuring low-latency content delivery and securing premium media assets under high traffic spikes.",
            impact: "Achieved 99.99% uptime during peak streaming events and automated scaling to handle dynamic loads securely."
        },
        {
            title: "FinTech / IoT Platform",
            description: "Built the foundational infrastructure for a secure, data-intensive FinTech application.",
            techStack: ["AWS EKS", "Kafka", "SonarQube", "ELK Stack", "Prometheus", "Grafana"],
            challenges: "Maintaining strict financial data security compliance while processing real-time IoT and transaction data.",
            impact: "Established a secure, observable microservices architecture with automated code quality checks (SonarQube) and centralized logging (ELK)."
        }
    ],

    certifications: [
        {
            name: "AWS Certified Solutions Architect – Associate",
            issuer: "Amazon Web Services",
            date: "" // Update if known
        }
    ]
};
