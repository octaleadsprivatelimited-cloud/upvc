const express = require('express');
const nodemailer = require('nodemailer');
const { body, validationResult } = require('express-validator');
const router = express.Router();

// Email transporter
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Contact form validation
const contactValidation = [
  body('name').trim().isLength({ min: 2 }).withMessage('Name must be at least 2 characters'),
  body('email').isEmail().normalizeEmail().withMessage('Please provide a valid email'),
  body('phone').isMobilePhone('en-IN').withMessage('Please provide a valid Indian phone number'),
  body('message').trim().isLength({ min: 10 }).withMessage('Message must be at least 10 characters'),
  body('service').optional().trim(),
  body('budget').optional().trim()
];

// Submit contact form
router.post('/submit', contactValidation, async (req, res) => {
  try {
    // Check validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        success: false, 
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { name, email, phone, message, service, budget } = req.body;

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to company email
      replyTo: email,
      subject: `New Contact Form Submission - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6;">New Contact Form Submission</h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Contact Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            ${service ? `<p><strong>Service Interested:</strong> ${service}</p>` : ''}
            ${budget ? `<p><strong>Budget:</strong> ${budget}</p>` : ''}
          </div>
          <div style="background: #fff; padding: 20px; border-left: 4px solid #3b82f6;">
            <h3 style="color: #333; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6;">${message}</p>
          </div>
          <div style="margin-top: 20px; padding: 15px; background: #e3f2fd; border-radius: 8px;">
            <p style="margin: 0; color: #1976d2;">
              <strong>Next Steps:</strong> Please respond to this customer within 24 hours. 
              You can reply directly to this email to contact the customer.
            </p>
          </div>
        </div>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send auto-reply to customer
    const autoReplyOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting uPVC Solutions Chittoor',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #3b82f6;">Thank You!</h1>
            <p style="color: #666;">We've received your message and will get back to you soon.</p>
          </div>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">What happens next?</h3>
            <ul style="color: #666; line-height: 1.6;">
              <li>Our team will review your requirements</li>
              <li>We'll contact you within 24 hours</li>
              <li>We'll schedule a free consultation if needed</li>
              <li>We'll provide a detailed quote</li>
            </ul>
          </div>

          <div style="background: #e3f2fd; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1976d2; margin-top: 0;">Quick Contact</h3>
            <p style="margin: 5px 0; color: #666;">
              <strong>Phone:</strong> +91 9949360406<br>
              <strong>WhatsApp:</strong> <a href="https://wa.me/919949360406" style="color: #25d366;">+91 9949360406</a><br>
              <strong>Email:</strong> info@tejeshprofine.com
            </p>
          </div>

          <div style="text-align: center; margin-top: 30px; padding: 20px; background: #3b82f6; color: white; border-radius: 8px;">
            <h3 style="margin: 0 0 10px 0;">Why Choose uPVC Solutions Chittoor?</h3>
            <p style="margin: 0; opacity: 0.9;">
              ✓ 25+ Years Experience ✓ Premium Quality ✓ Professional Installation ✓ 25+ Years Warranty
            </p>
          </div>
        </div>
      `
    };

    await transporter.sendMail(autoReplyOptions);

    res.json({
      success: true,
      message: 'Thank you for your message! We will contact you soon.'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.'
    });
  }
});

// Get contact information
router.get('/info', (req, res) => {
  res.json({
    success: true,
    data: {
      phone: '+91 9949360406',
      email: 'info@tejeshprofine.com',
      address: 'Desamma Nagar, Chittoor District, Andhra Pradesh',
      whatsapp: 'https://wa.me/919949360406',
      workingHours: 'Mon-Sat: 9:00 AM - 6:00 PM',
      emergencyContact: '+91 9949360406'
    }
  });
});

// Request callback
router.post('/callback', [
  body('name').trim().isLength({ min: 2 }).withMessage('Name is required'),
  body('phone').isMobilePhone('en-IN').withMessage('Valid phone number is required'),
  body('preferredTime').optional().trim()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        success: false, 
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { name, phone, preferredTime } = req.body;

    // Send callback request email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Callback Request - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6;">Callback Request</h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            ${preferredTime ? `<p><strong>Preferred Time:</strong> ${preferredTime}</p>` : ''}
          </div>
          <div style="margin-top: 20px; padding: 15px; background: #fff3cd; border-radius: 8px;">
            <p style="margin: 0; color: #856404;">
              <strong>Action Required:</strong> Please call this customer back as soon as possible.
            </p>
          </div>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);

    res.json({
      success: true,
      message: 'Callback request submitted successfully. We will contact you soon.'
    });

  } catch (error) {
    console.error('Callback request error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit callback request. Please try again later.'
    });
  }
});

module.exports = router;
