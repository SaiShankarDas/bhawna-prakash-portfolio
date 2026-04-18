import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Award, Briefcase, Users, BookOpen } from 'lucide-react';
import { useCountUp, fadeUp, staggerContainer, staggerChild } from '../../hooks/useAnimations';

const AchievementCard = ({ count, label, icon, suffix = '' }) => {
  const isNumeric = !isNaN(parseInt(count));
  const { ref, value } = useCountUp(isNumeric ? parseInt(count) : 0, 2000, { suffix });

  return (
    <motion.div
      variants={staggerChild}
      ref={ref}
      style={{
        padding: 'var(--space-6)',
        background: 'var(--bg-secondary)',
        border: '1px solid var(--border-light)',
        borderRadius: 'var(--radius-lg)',
        display: 'flex', flexDirection: 'column', gap: 'var(--space-4)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'default'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-md)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div style={{ color: 'var(--accent-blue)' }}>{icon}</div>
      <div>
        <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px', fontVariantNumeric: 'tabular-nums' }}>
          {isNumeric ? value : count}
        </div>
        <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', fontWeight: 500 }}>{label}</div>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <section id="about" style={{
      paddingTop: 'var(--space-16)',
      paddingBottom: 0,
      backgroundColor: 'var(--bg-primary)',
      color: 'var(--text-primary)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Dynamic Background Photo Layer - High Visibility */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        backgroundImage: 'url("/assets/headshots/headshot_2_office.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        opacity: 0.25,
      }} />
      
      {/* Gradient Overlay for Text Legibility while keeping photo visible */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        background: 'linear-gradient(to right, rgba(252,252,252,0.95) 0%, rgba(252,252,252,0.7) 40%, rgba(252,252,252,0.3) 100%)',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16" style={{ alignItems: 'center' }}>

          {/* Left: Biography & CTA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={staggerChild} style={{
              display: 'inline-flex', alignItems: 'center',
              padding: 'var(--space-2) var(--space-4)',
              background: 'rgba(37, 99, 235, 0.06)', borderRadius: 'var(--radius-full)',
              marginBottom: 'var(--space-6)', fontSize: '0.8rem', fontWeight: 600,
              color: 'var(--accent-blue)', letterSpacing: '0.03em'
            }}>
              About Bhawna
            </motion.div>

            <motion.h2 variants={staggerChild} className="h2" style={{ marginBottom: 'var(--space-6)', color: 'var(--text-primary)' }}>
              Human Resources — Not Just Resources, But Humans First.
            </motion.h2>
            <motion.p variants={staggerChild} style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', marginBottom: 'var(--space-4)', lineHeight: 1.8 }}>
              As an HR Specialist, I believe people are the strongest pillar of any organization. With a focus on Recruitment, Employee Engagement, and Culture Building, I aim to create workplaces where people feel valued, motivated, and inspired to grow.
            </motion.p>
            <motion.p variants={staggerChild} style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', marginBottom: 'var(--space-8)', lineHeight: 1.8 }}>
              My goal is to bridge the gap between people and opportunities—ensuring careers flourish and companies thrive. With an 8.5K+ strong community on LinkedIn, I advocate for transparency and empathy in the workplace.
            </motion.p>

            <motion.div variants={staggerChild}>
              <Link
                to="/booking"
                className="btn btn-glow"
                style={{ padding: '0.875rem 2rem', display: 'flex', alignItems: 'center', gap: '12px', width: 'fit-content' }}
              >
                Book a Strategy Call <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: Achievement Dashboard */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <AchievementCard count="8.5K" suffix="+" label="LinkedIn Followers" icon={<Users />} />
            <AchievementCard count="Lead Sure Media" label="HR Specialist" icon={<Award />} />
            <AchievementCard count="B.Com" label="University of Delhi" icon={<BookOpen size={24} />} />
            <AchievementCard count="Creative Head" label="Leaders of Tomorrow" icon={<Briefcase />} />
          </motion.div>

        </div>

        {/* New Featured Insights Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          style={{ marginTop: 'var(--space-16)', paddingTop: 'var(--space-12)', borderTop: '1px solid var(--border-light)' }}
        >
          <motion.h3 variants={staggerChild} className="h3" style={{ marginBottom: 'var(--space-8)', textAlign: 'center' }}>Featured Insights</motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Ethics Over Earnings', desc: 'A deep dive into workplace integrity and choosing character over comfort.', reactions: '1,061+' },
              { title: 'The Power of a Safe Space', desc: 'Advocacy on giving employees a voice and encouraging them to speak up.', reactions: 'Featured' },
              { title: 'Lead Sure Media Roles', desc: 'Showcasing open roles and the performance-driven culture at our firm.', reactions: 'Active' }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={staggerChild}
                className="glass-card"
                style={{ padding: 'var(--space-6)', background: 'var(--bg-secondary)' }}
                whileHover={{ y: -5, boxShadow: 'var(--shadow-md)' }}
              >
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-blue)', marginBottom: '8px' }}>{item.reactions}</div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '12px' }}>{item.title}</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* VIP Priority CTA — Integrated into the main background */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        style={{
          marginTop: 'var(--space-8)',
          paddingBottom: 'var(--space-16)',
        }}
      >
        <div className="container vip-cta-container" style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: 'var(--space-6)',
          padding: '2rem',
          background: 'rgba(255, 255, 255, 0.4)',
          backdropFilter: 'blur(10px)',
          borderRadius: 'var(--radius-xl)',
          border: '1px solid rgba(255, 255, 255, 0.5)',
          boxShadow: 'var(--shadow-md)'
        }}>
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
              Need urgent hiring or career guidance within 24 hours?
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              Priority sessions with guaranteed same-day turnaround for time-sensitive decisions.
            </p>
          </div>
          <Link
            to="/booking"
            className="btn btn-glow"
            style={{ padding: '0.875rem 2rem', fontSize: '1rem', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '12px' }}
          >
            Book Priority Access
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
