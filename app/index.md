---
homepage: true
layout: page
title: Get Tech Certified
---
<div style="border-left: 10px solid #ff6900; padding: 40px; margin-bottom: 30px; background-color: #f8f8f8;">
  <div class="govuk-grid-row">
    <div class="govuk-grid-column-one-third">
      <img src="/assets/get-tech-certified-logo.png" alt="Get Tech Certified logo" style="width: 100%; max-width: 200px; display: block; margin: 0 auto;">
    </div>
    <div class="govuk-grid-column-two-thirds">
      <p class="govuk-body" style="margin-top: 0; font-size: 1.1rem; line-height: 1.5;">
        Following the incredible success of the Get Cloud Certified campaign last year, the Government Digital Service (GDS) is back with an even bigger opportunity to Get Tech Certified this Autumn.
      </p>
    </div>
  </div>
  
  <p class="govuk-body" style="margin-top: 30px;">From 1 October 2025 to 31 December 2025, all civil and public servants can access over 200 free learning and certification pathways – from beginner to advanced – across key digital and technology areas.</p>
  
  <p class="govuk-body">This offer is made possible through partnerships with 16 leading tech providers, and it is completely free.</p>
  
  <p class="govuk-body">Whether you are just starting out or looking to deepen your expertise, there is something here for you.</p>
</div>

## Real stories, real impact

Thanks to last year's programme, Dionne made a successful career switch into digital. Her journey shows what is possible when you take that first step.

<div class="govuk-grid-row">
  <div class="govuk-grid-column-full">
    <video controls width="100%" style="max-width: 600px; margin-bottom: 20px;">
      <source src="/assets/vmdc-learn-get-tech-certified-testimony.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
</div>

<div class="govuk-inset-text">
  <p>"One of the most rewarding milestones in my journey of working in Digital was completing the AWS Cloud Practitioner qualification under the Get Cloud Certified programme. This deepened my understanding of cloud computing principles and gave me the confidence to explore more advanced cloud technologies and their practical applications in the workplace."</p>
  <p><strong>Dionne Hall</strong><br>
  Assistant Software Licensing Manager – Integrated Corporate Services</p>
</div>

## Who should get involved?

Get Tech Certified is for:

- anyone curious about digital and tech skills
- people working in digital, data and technology professions
- people from other professions who want to learn more about tech and its potential

Don't miss this chance to boost your digital skills, earn industry-recognised certifications, and help shape the future of public service.

## Start your digital journey today!

1. **Press the buttons below to search by topic or by vendor** (both listed in alphabetical order) for the certification pathways on offer.
2. Once on a vendor's website, **register your details using your work email address only** – only civil service or public sector email domains are eligible. If you believe you qualify, but your email is not accepted, please contact [GetTechCertified@dsit.gov.uk](mailto:GetTechCertified@dsit.gov.uk).

<div class="govuk-grid-row">
  <div class="govuk-grid-column-full" style="text-align: center; margin: 30px 0;">
    <img src="/assets/get-tech-certified-logo.png" alt="Get Tech Certified logo with orange connecting dots" style="max-width: 500px; width: 100%; height: auto;">
  </div>
</div>

### By topic

<div class="govuk-button-group">
  {% for page in collections.topic | includes("data.theme", "Topics") %}
    <a href="{{ page.url }}" class="govuk-button govuk-button--secondary">{{ page.data.title }}</a>
  {% endfor %}
</div>

### By vendor <span id="vendors"></span>

<div class="govuk-grid-row">
  <div class="govuk-grid-column-full">
    <style>
      .vendor-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 40px 30px;
        padding: 30px 15px;
        max-width: 1200px;
        margin: 0 auto;
      }
      .vendor-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        justify-content: space-between;
        min-height: 150px;
      }
      .vendor-logo-link {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 80px;
        width: 100%;
        margin-bottom: 10px;
      }
      .vendor-logo {
        max-width: 180px;
        max-height: 80px;
        width: auto;
        height: auto;
        object-fit: contain;
      }
      @media (max-width: 768px) {
        .vendor-grid {
          grid-template-columns: repeat(2, 1fr) !important;
          gap: 40px 30px;
        }
      }
      @media (max-width: 480px) {
        .vendor-grid {
          grid-template-columns: 1fr !important;
          gap: 30px;
        }
      }
    </style>
    <div class="vendor-grid">
      <div class="vendor-item">
        <a href="https://pages.awscloud.com/aws-partnership-government-digital-services-get-tech-certified.html" target="_blank" class="vendor-logo-link">
          <img src="/vendors/vmdc-learn-get-tech-certified-vendor-aws.png" alt="AWS" class="vendor-logo">
        </a>
        <p class="govuk-body-s">Amazon Web Services</p>
      </div>
      <div class="vendor-item">
        <a href="https://discover.confluent.io/0d989e" target="_blank" class="vendor-logo-link">
          <img src="/vendors/vmdc-learn-get-tech-certified-vendor-confluent.png" alt="Confluent" class="vendor-logo">
        </a>
        <p class="govuk-body-s">Data streaming platform</p>
      </div>
      <div class="vendor-item">
        <a href="https://events.databricks.com/training-uk-gov-get-tech-certified" target="_blank" class="vendor-logo-link">
          <img src="/vendors/vmdc-learn-get-tech-certified-vendor-databricks.png" alt="Databricks" class="vendor-logo">
        </a>
        <p class="govuk-body-s">Data and AI platform</p>
      </div>
      <div class="vendor-item">
        <a href="https://rsvp.withgoogle.com/events/google-cloud-get-tech-certified" target="_blank" class="vendor-logo-link">
          <img src="/vendors/vmdc-learn-get-tech-certified-vendor-google-cloud.png" alt="Google Cloud" class="vendor-logo">
        </a>
        <p class="govuk-body-s">Google Cloud Platform</p>
      </div>
      <div class="vendor-item">
        <a href="https://www.hashicorp.com/campaign/24q4-emea-ukic-gds-skill-up-campaign" target="_blank" class="vendor-logo-link">
          <img src="/vendors/vmdc-learn-get-tech-certified-vendor-hashicorp.png" alt="HashiCorp" class="vendor-logo">
        </a>
        <p class="govuk-body-s">Infrastructure automation</p>
      </div>
      <div class="vendor-item">
        <a href="https://livesend.ibm.com/i/V0WIDS6CLW7XFtll8MaWCjvN5___aqr7NVdOTc04PPLUSSIGNWqt34kEatTLdXgtfZoqX7PLUSSIGNfbgqlHaueW5QUQlZEfFTxIw8QTCzWkbXqIkygMKT___2apEEQUALSIGN" target="_blank" class="vendor-logo-link">
          <img src="/vendors/vmdc-learn-get-tech-certified-vendor-ibm.png" alt="IBM" class="vendor-logo">
        </a>
        <p class="govuk-body-s">Cloud, AI and quantum</p>
      </div>
      <div class="vendor-item">
        <a href="https://c4b-integration.com/elevate" target="_blank" class="vendor-logo-link">
          <img src="/vendors/vmdc-learn-get-tech-certified-vendor-meta.png" alt="Meta" class="vendor-logo">
        </a>
        <p class="govuk-body-s">Llama AI model training</p>
      </div>
      <div class="vendor-item">
        <a href="https://www.microsoft.com/en-gb/business/get-tech-certified" target="_blank" class="vendor-logo-link">
          <img src="/vendors/vmdc-learn-get-tech-certified-vendor-microsoft.png" alt="Microsoft" class="vendor-logo">
        </a>
        <p class="govuk-body-s">Azure cloud certifications</p>
      </div>
      <div class="vendor-item">
        <a href="https://www.mongodb.com/resources/webinars/mongodb-and-google-public-sector/get-tech-certified-with-mongodb" target="_blank" class="vendor-logo-link">
          <img src="/vendors/vmdc-learn-get-tech-certified-vendor-mongo-db.png" alt="MongoDB" class="vendor-logo">
        </a>
        <p class="govuk-body-s">Database certifications</p>
      </div>
      <div class="vendor-item">
        <a href="https://education.oracle.com/ukgovtcddo" target="_blank" class="vendor-logo-link">
          <img src="/vendors/vmdc-learn-get-tech-certified-vendor-oracle-university.png" alt="Oracle" class="vendor-logo">
        </a>
        <p class="govuk-body-s">Cloud and database</p>
      </div>
      <div class="vendor-item">
        <a href="https://view.salesforce.com/viewer/1a2333fe89b26207240d8bc21c3d13fe#os2loc68wo" target="_blank" class="vendor-logo-link">
          <img src="/vendors/vmdc-learn-get-tech-certified-vendor-salesforce.png" alt="Salesforce" class="vendor-logo">
        </a>
        <p class="govuk-body-s">CRM and platform</p>
      </div>
      <div class="vendor-item">
        <a href="https://learning.servicenow.com/now/lxp/home" target="_blank" class="vendor-logo-link">
          <img src="/vendors/vmdc-learn-get-tech-certified-vendor-service-now.png" alt="ServiceNow" class="vendor-logo">
        </a>
        <p class="govuk-body-s">Digital workflow</p>
      </div>
      <div class="vendor-item">
        <a href="https://www.snowflake.com/en/lp/GDS_Get_Tech_Certified_Programme/" target="_blank" class="vendor-logo-link">
          <img src="/vendors/vmdc-learn-get-tech-certified-vendor-snowflake.png" alt="Snowflake" class="vendor-logo">
        </a>
        <p class="govuk-body-s">Data platform</p>
      </div>
      <div class="vendor-item">
        <a href="https://hartreetraining.stfc.ac.uk/moodle/local/hartree/index.php" target="_blank" class="vendor-logo-link">
          <img src="/vendors/vmdc-learn-get-tech-certified-vendor-ukri.png" alt="STFC Hartree Centre" class="vendor-logo">
        </a>
        <p class="govuk-body-s">Advanced computing</p>
      </div>
      <div class="vendor-item">
        <a href="https://wso2.com/training/certification/gov-uk/" target="_blank" class="vendor-logo-link">
          <img src="/vendors/vmdc-learn-get-tech-certified-vendor-wso2.png" alt="WSO2" class="vendor-logo">
        </a>
        <p class="govuk-body-s">API and integration</p>
      </div>
      <div class="vendor-item">
        <a href="https://www.redhat.com/en/global/united-kingdom-ireland/solutions/public-sector-uk#red-hat-enablement" target="_blank" class="vendor-logo-link">
          <img src="/vendors/vmdc-learn-get-tech-certified-vendor-red-hat.png" alt="Red Hat" class="vendor-logo">
        </a>
        <p class="govuk-body-s">Training and enablement</p>
      </div>
    </div>
  </div>
</div>

<h2 class="govuk-heading-l">How to get started</h2>

1. Choose your certification area above
2. Select a vendor and certification level (Beginner, Intermediate, or Advanced)
3. Click on the vendor name to visit their registration page
4. **Register using your work email address only** - only civil service or public sector email domains are eligible

If you believe you qualify but your email is not accepted, please contact [GetTechCertified@dsit.gov.uk](mailto:GetTechCertified@dsit.gov.uk)

<h2 class="govuk-heading-l">Need help?</h2>

Visit our [Frequently Asked Questions](/posts/faqs/) page for more information.