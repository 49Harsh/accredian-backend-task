const { PrismaClient } = require('@prisma/client');
const { sendReferralEmail } = require('../utils/emailService');

const prisma = new PrismaClient();

const createReferral = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }

    const referral = await prisma.referral.create({
      data: { name, email, phone, message },
    });

    await sendReferralEmail(referral);

    res.status(201).json(referral);
  } catch (error) {
    console.error('Error creating referral:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getReferrals = async (req, res) => {
  try {
    const referrals = await prisma.referral.findMany();
    res.json(referrals);
  } catch (error) {
    console.error('Error fetching referrals:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { createReferral, getReferrals };