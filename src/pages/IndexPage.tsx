import {
  PageHeader,
  OverflowBreadcrumbs,
  AIChatContextProvider,
  AIChatContent,
  AIChatBox,
  AIChatBoxSuggestionsMenu,
  AIChatBoxSuggestionsButton,
  AIChatAIMessage,
  AIChatUserMessage,
  AIChatMessageHeader,
  AIChatMessageAvatar,
  AIChatMessageTextBlock,
  AIChatMessageFooter,
  AIChatSuggestedActions,
  AIChatTimestamp,
  useAIChatContext,
  type AIChatBoxSuggestionMenuItem,
} from '@diligentcorp/atlas-react-bundle';
import SuccessIcon from '@diligentcorp/atlas-react-bundle/icons/Success';
import DocumentIcon from '@diligentcorp/atlas-react-bundle/icons/Document';
import KeyIcon from '@diligentcorp/atlas-react-bundle/icons/Key';
import BookIcon from '@diligentcorp/atlas-react-bundle/icons/Book';
import { Box, Button, Card, CardContent, CardHeader, Stack, Typography, useTheme } from '@mui/material';
import { NavLink } from 'react-router';

import PageLayout from '../components/PageLayout.js';

const SUGGESTIONS: AIChatBoxSuggestionMenuItem[] = [
  { id: '1', label: 'Summarize my recent policy changes' },
  { id: '2', label: 'What compliance tasks are overdue?' },
  { id: '3', label: 'Show me training completion rates' },
];

const DATA_SERVICES = [
  { id: 'policy-manager', name: 'Policy Manager', Icon: DocumentIcon, lastUpdated: '23 minutes ago' },
  { id: 'vault', name: 'Vault', Icon: KeyIcon, lastUpdated: '1 hour ago' },
  { id: 'training', name: 'Training', Icon: BookIcon, lastUpdated: '3 days ago' },
];

function ChatInterface() {
  const { setPrompt, setIsGenerating, isSuggestionsMenuOpen, setIsSuggestionsMenuOpen } = useAIChatContext();

  return (
    <Card sx={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
      <Box sx={{ flex: 1, overflowY: 'auto', px: 3, pt: 3 }}>
        <AIChatContent>
          <AIChatTimestamp
            time={new Date().toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          />

          {/* Bot opening message */}
          <AIChatAIMessage
            header={<AIChatMessageHeader name="Compliance AI" time="9:00 AM" avatar={<AIChatMessageAvatar uniqueId="compliance-ai" initials="AI" />} />}
            footer={
              <AIChatMessageFooter
                suggestedActions={
                  <AIChatSuggestedActions
                    label="Suggested actions"
                    buttons={
                      <>
                        <Button variant="outlined" size="small">
                          Yes, show me
                        </Button>
                        <Button variant="text" size="small">
                          Not right now
                        </Button>
                      </>
                    }
                  />
                }
              />
            }
          >
            <AIChatMessageTextBlock>
              {`Hi! I've analysed your connected data across **Policy Manager**, **Vault**, and **Training**.\n\nI've identified **3 high-priority recommendations** that could improve your compliance posture. Would you like to see them?`}
            </AIChatMessageTextBlock>
          </AIChatAIMessage>

          {/* User reply */}
          <AIChatUserMessage
            header={<AIChatMessageHeader name="You" time="9:01 AM" avatar={<AIChatMessageAvatar uniqueId="current-user" initials="SM" />} />}
            alignment="end"
            message="Yes, show me"
          />

          {/* Bot response with recommendations */}
          <AIChatAIMessage
            header={<AIChatMessageHeader name="Compliance AI" time="9:01 AM" avatar={<AIChatMessageAvatar uniqueId="compliance-ai" initials="AI" />} />}
            footer={
              <AIChatMessageFooter
                suggestedActions={
                  <AIChatSuggestedActions
                    label="Suggested actions"
                    buttons={
                      <>
                        <Button variant="text" size="small">
                          Learn more about 1
                        </Button>
                        <Button variant="text" size="small">
                          Learn more about 2
                        </Button>
                        <Button variant="text" size="small">
                          Learn more about 3
                        </Button>
                      </>
                    }
                  />
                }
              />
            }
          >
            <AIChatMessageTextBlock>
              {`Here are your top 3 compliance recommendations, based on data from the last 90 days:

**1. Three critical compliance deadlines within 45 days** · HIGH · In progress

Two of these items are currently unassigned. Failure to act may expose the organisation to regulatory or reputational risk.

**2. Spike in sexual harassment reports in North America (+38% vs previous quarter)** · HIGH · Open

Over the last 90 days, sexual harassment reports in North America have increased by 38%, with the majority originating from two business units. This pattern suggests a potential gap between policy clarity, training uptake, and lived employee experience.

**3. Unusual increase in anonymous reporting in LATAM (+62%)** · HIGH · Open

Anonymous cases in LATAM have risen sharply over the past 60 days. This may indicate declining trust or cultural risk in specific business units.`}
            </AIChatMessageTextBlock>
          </AIChatAIMessage>
          {/* User selects learn more about 1 */}
          <AIChatUserMessage
            header={<AIChatMessageHeader name="You" time="9:02 AM" avatar={<AIChatMessageAvatar uniqueId="current-user" initials="SM" />} />}
            alignment="end"
            message="Learn more about 1"
          />

          {/* Bot detailed response for recommendation 1 */}
          <AIChatAIMessage
            header={<AIChatMessageHeader name="Compliance AI" time="9:02 AM" avatar={<AIChatMessageAvatar uniqueId="compliance-ai" initials="AI" />} />}
            footer={
              <AIChatMessageFooter
                suggestedActions={
                  <AIChatSuggestedActions
                    label="Suggested actions"
                    buttons={
                      <>
                        <Button variant="text" size="small">
                          Auto-generate reminder schedule
                        </Button>
                        <Button variant="text" size="small">
                          Draft regulator-ready compliance status report
                        </Button>
                        <Button variant="text" size="small">
                          Create executive risk summary
                        </Button>
                      </>
                    }
                  />
                }
              />
            }
          >
            <AIChatMessageTextBlock>
              {`**3 critical compliance deadlines within 45 days** · HIGH · In progress · #260210r4n8wc · 34 days ago

Two of these items are currently unassigned. Failure to act may expose the organisation to regulatory or reputational risk.

**Key signals**

- Global Code of Conduct review due in 21 days
- EU Whistleblower Directive annual reporting due in 34 days
- Mandatory harassment training renewal for APAC expires in 45 days

**Suggested actions**

- Assign owners to unallocated tasks → Task view
- Review training compliance by region → Training`}
            </AIChatMessageTextBlock>
          </AIChatAIMessage>
        </AIChatContent>
      </Box>
      <Box sx={{ px: 3, pb: 3, pt: 1 }}>
        {isSuggestionsMenuOpen && (
          <AIChatBoxSuggestionsMenu
            suggestions={SUGGESTIONS}
            onSuggestionClick={(suggestion) => {
              setPrompt(suggestion.label);
              setIsSuggestionsMenuOpen(false);
            }}
          />
        )}
        <AIChatBox
          onSubmit={() => {
            setTimeout(() => setIsGenerating(false), 3000);
          }}
          onStop={() => setIsGenerating(false)}
          slotProps={{
            textField: {},
          }}
          leadingActions={<AIChatBoxSuggestionsButton label="Suggestions" />}
        />
      </Box>
    </Card>
  );
}

function DataServicesSection() {
  const { presets } = useTheme();
  const StatusIndicator = presets.StatusIndicatorPresets?.components.StatusIndicator;

  return (
    <Box>
      <Typography variant="h3" component="h2" fontWeight={600} sx={{ mb: 2 }}>
        Connected data services
      </Typography>
      <Stack direction="row" gap={2}>
        {DATA_SERVICES.map(({ id, name, Icon, lastUpdated }) => (
          <Card key={id} sx={{ flex: 1 }}>
            <CardHeader
              avatar={<Icon size="lg" aria-hidden />}
              title={
                <Typography variant="h3" component="h3" fontWeight={600}>
                  {name}
                </Typography>
              }
              action={StatusIndicator && <StatusIndicator color="success" label="Connected" icon={<SuccessIcon size="md" aria-hidden />} />}
            />
            <CardContent>
              <Typography variant="textSm" sx={({ tokens }) => ({ color: tokens.semantic.color.type.muted.value })}>
                Updated {lastUpdated}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  );
}

export default function IndexPage() {
  return (
    <PageLayout fullHeight>
      <PageHeader
        pageTitle="AI assistant"
        breadcrumbs={
          <OverflowBreadcrumbs
            leadingElement={<span>Connected Compliance</span>}
            items={[{ id: 'ai-assistant', label: 'AI assistant', url: '/' }]}
            hideLastItem={true}
            aria-label="Breadcrumbs"
          >
            {({ label, url }) => <NavLink to={url}>{label}</NavLink>}
          </OverflowBreadcrumbs>
        }
      />
      <AIChatContextProvider>
        <ChatInterface />
      </AIChatContextProvider>
      <Box sx={{ flexShrink: 0 }}>
        <DataServicesSection />
      </Box>
    </PageLayout>
  );
}
