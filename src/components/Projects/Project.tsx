import { useState } from 'react';
import useStyles from '../Shared/MaterialUI';
import { Card, CardContent, CardMedia, CardActions, Collapse } from '@material-ui/core';
import { ExpandMore, H1, H2, Text, ButtonLink } from '../Shared/StyledComponents';

const Project = function Project({ name, dates, pic, short_desc, long_desc, link, languages, tools, experience, subjects, focus, school_proj, code_snippet, partner } : ProjectInterface) {
  // Rendering of each project in projects section

  // Make use of Material UI's styling classes
  const classes = useStyles();

  // Whether or not button is clicked to show expanded content
  // Variable, function to change, and default value for changing state
  const [expanded, setExpanded] = useState(false);

  // Function to toggle expanded content to opposite of current state
  const handleExpandClick = () => setExpanded(!expanded);

  return (
    // This is all disgusting - please refactor later
    <div className={classes.root}>
      <Card className={classes.card}>
        <div className={classes.cardHeader}>
          <H1>{name}</H1>
          <H2>{dates}</H2>
        </div>
        <CardMedia
          component="img"
          height="200rem"
          width="100%"
          image={pic}
          alt={name}
        />
        <div className="bg-primary color-text padding_tb">
          <Text className="bold">
            {short_desc}
          </Text>
          <Text>
            {languages ? `Languages: ${languages.join(', ')}` : ''}
          </Text>
          <Text>
            {tools ? `Tools: ${tools.join(', ')}` : ''}
          </Text>
          <Text>
            {subjects ? `Subjects: ${subjects.join(', ')}` : ''}
          </Text>
          </div>
        <CardActions disableSpacing>
          <div className="bg-primary">
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" stroke="#26A641">
              <path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"/>
            </svg>
          </ExpandMore>
          </div>
        </CardActions>
        <div className="bg-primary color-text">
          {/* Collapsable content starts here */}
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <CardMedia
                component="img"
                image={code_snippet}
                alt="Code Snippet for {name}"
              />
              <div className="padding_tb">
                <Text>
                  {long_desc}
                </Text>
                <Text>
                  {experience ? `Experience: ${experience}` : ''}
                </Text>
                <Text>
                  {focus ? `Focus: ${focus.join(', ')}` : ''}
                </Text>
                <Text>
                  {school_proj ? 'School Project' : 'Personal Project'}
                </Text>
                <Text>
                  {partner.boolean ? <a href={partner.link} target="_blank" rel="noreferrer">{partner.name}</a> : ''}
                </Text>
              </div>
              <div className="center">
                <ButtonLink className={classes.customButton} href={link} target="_blank" rel="noreferrer">
                    <Text>View Project</Text>
                </ButtonLink>
              </div>
            </CardContent>
          </Collapse>
        </div>
      </Card>
    </div>
  );
};

interface ProjectInterface {
  name: string;
  dates: string;
  pic: string;
  short_desc: string;
  long_desc: string;
  link: string;
  languages: string[];
  tools: string[];
  experience: string;
  subjects: string[];
  focus: string[];
  school_proj: boolean;
  code_snippet: string;
  partner: {
    boolean: boolean;
    name: string;
    link: string;
  };
}

export default Project;
