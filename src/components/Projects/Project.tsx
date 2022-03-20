import { useState } from 'react';
import useStyles from '../Shared/MaterialUI';
import { Button, Card, CardContent, CardMedia, CardActions, Collapse } from '@material-ui/core';
import { ExpandMore, H1, H2, Text, ButtonLink } from '../Shared/StyledComponents';

const Project = function Project({ name, dates, pic, short_desc, long_desc, link, languages, tools, experience, subjects, focus, school_proj, code_snippet, partner } : ProjectInterface) {
  const classes = useStyles();

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
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
      <CardActions disableSpacing>
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
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <CardMedia
            component="img"
            image={code_snippet}
            alt="Code Snippet for {name}"
          />
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
          <div className="center">
            <Button className={classes.customButton}>
              <ButtonLink href={link} target="_blank" rel="noreferrer">
                View Project
              </ButtonLink>
            </Button>
          </div>
        </CardContent>
      </Collapse>
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
