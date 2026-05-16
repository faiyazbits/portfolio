import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Heading,
  Text,
  Button,
  Hr,
} from '@react-email/components';

export default function WelcomeEmail({ blogUrl }) {
  return (
    <Html lang="en">
      <Head />
      <Body style={{ backgroundColor: '#f5f5f5', fontFamily: 'Arial, sans-serif', margin: 0 }}>
        <Container style={{ maxWidth: '560px', margin: '40px auto', backgroundColor: '#ffffff', borderRadius: '8px', overflow: 'hidden' }}>
          <Section style={{ padding: '40px 40px 24px' }}>
            <Heading style={{ fontSize: '24px', fontWeight: '700', color: '#1b1b1b', margin: '0 0 16px' }}>
              Welcome &mdash; glad you&apos;re here.
            </Heading>
            <Text style={{ fontSize: '16px', color: '#444444', lineHeight: '1.6', margin: '0 0 16px' }}>
              You&apos;re subscribed to my occasional writing on AI product engineering, real-world LLM systems, and what it actually takes to ship production-grade AI.
            </Text>
            <Text style={{ fontSize: '16px', color: '#444444', lineHeight: '1.6', margin: '0 0 24px' }}>
              No noise &mdash; just things I find genuinely useful.
            </Text>
            <Button
              href={blogUrl}
              style={{
                backgroundColor: '#B63E96',
                color: '#ffffff',
                padding: '14px 28px',
                borderRadius: '6px',
                fontSize: '15px',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              Browse the Blog
            </Button>
          </Section>
          <Hr style={{ borderColor: '#eeeeee', margin: '0 40px' }} />
          <Section style={{ padding: '24px 40px 40px' }}>
            <Text style={{ fontSize: '13px', color: '#888888', lineHeight: '1.6', margin: 0 }}>
              Hit reply anytime &mdash; I&apos;m always happy to chat about what you&apos;re building.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
