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

export default function PlaybookEmail({ downloadUrl }) {
  return (
    <Html lang="en">
      <Head />
      <Body style={{ backgroundColor: '#f5f5f5', fontFamily: 'Arial, sans-serif', margin: 0 }}>
        <Container style={{ maxWidth: '560px', margin: '40px auto', backgroundColor: '#ffffff', borderRadius: '8px', overflow: 'hidden' }}>
          <Section style={{ padding: '40px 40px 24px' }}>
            <Heading style={{ fontSize: '24px', fontWeight: '700', color: '#1b1b1b', margin: '0 0 16px' }}>
              Your checklist is ready.
            </Heading>
            <Text style={{ fontSize: '16px', color: '#444444', lineHeight: '1.6', margin: '0 0 8px' }}>
              Here&apos;s your copy of the <strong>AI Product Readiness Checklist</strong> — use it to catch the most common failure points before you scale.
            </Text>
            <Text style={{ fontSize: '16px', color: '#444444', lineHeight: '1.6', margin: '0 0 24px' }}>
              It covers RAG design, performance signals, and architecture decisions that teams often get wrong in production.
            </Text>
            <Button
              href={downloadUrl}
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
              Download Checklist
            </Button>
          </Section>
          <Hr style={{ borderColor: '#eeeeee', margin: '0 40px' }} />
          <Section style={{ padding: '24px 40px 40px' }}>
            <Text style={{ fontSize: '13px', color: '#888888', lineHeight: '1.6', margin: 0 }}>
              Questions or want to talk AI product engineering? Just reply to this email — I read every one.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
