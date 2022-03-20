import headphones_screenshot from '../../assets/projects/headphones_screenshot.png';
import headphones_snippet from '../../assets/projects/headphones_snippet.png';
import smiling_school_screenshot from '../../assets/projects/smiling_school_screenshot.png';
import smiling_school_snippet from '../../assets/projects/smiling_school_snippet.png';
import twilight_bark_screenshot from '../../assets/projects/twilight_bark_screenshot.png';
import twilight_bark_snippet from '../../assets/projects/twilight_bark_snippet.png';
import waves_screenshot from '../../assets/projects/waves_screenshot.png';
import waves_snippet from '../../assets/projects/waves_snippet.png';

const projList = [
  {
    'name': 'Holberton Headphones',
    'dates': '8/25/21 - 9/3/21',
    'pic': headphones_screenshot,
    'short_desc': 'Recreation of fully-responsive static frontend',
    'long_desc': '7-day exact replication of Figma design at 3 sizes using pure CSS',
    'link': 'https://github.com/RLewis11769/holberton-headphones',
    'languages': ['CSS', 'HTML'],
    'tools': ['None'],
    'experience': 'Less than 1 month of CSS',
    'subjects': ['Frontend Web Development', 'Figma Replica', 'Static Content', 'Responsiveness', 'Accessibility'],
    'focus': ['Accessibility', 'Accuracy', 'Basics'],
    'code_snippet': headphones_snippet,
    'school_proj': true,
    'partner': {
      'boolean': false,
      'name': '',
      'link': '',
    },
  },
  {
    'name': 'Smiling School - JavaScript',
    'dates': '10/4/21 - 10/12/21',
    'pic': smiling_school_screenshot,
    'short_desc': 'Recreation of fully-responsive dynamic frontend',
    'long_desc': '7-day exact replication of Figma design with gifs. All data loaded from 4 APIs. This specific portion of the project added onto an existing Bootstrap-based static content replication.',
    'link': 'https://github.com/RLewis11769/holberton-smiling-school-javascript',
    'languages': ['JavaScript', 'HTML', 'CSS'],
    'tools': ['Bootstrap', 'jQuery', 'Ajax', 'Slick Carousel'],
    'experience': 'Less than 3 months of frontend development',
    'subjects': ['Frontend Web Development', 'Figma Replica', 'Dynamic Content', 'API', 'Loading Animation', 'Responsiveness', 'Accessibility'],
    'focus': ['Reusability', 'Organization', 'Optimization'],
    'code_snippet': smiling_school_snippet,
    'school_proj': true,
    'partner': {
      'boolean': false,
      'name': '',
      'link': '',
    },
  },
  {
    'name': 'Waves Recording Studio',
    'dates': '10/14/21 - 10/25/21',
    'pic': waves_screenshot,
    'short_desc': 'Custom dynamic frontend for recording studio utilizing the Spotify API',
    'long_desc': '11-day custom frontend from design to implementation based on "waves" as a prompt. All data loaded from 2 Spotify API endpoints using Client Credentials authorization.',
    'link': 'https://github.com/RLewis11769/waves_custom-frontend',
    'languages': ['JavaScript', 'HTML', 'CSS'],
    'tools': ['Bootstrap', 'jQuery', 'jQuery Validation (for forms)', 'Slick (for carousel)', 'Spotify API'],
    'experience': '3 months of frontend development',
    'subjects': ['Frontend Web Development', 'Custom Design', 'Dynamic Content', 'APIs', 'Asynchronous Programming', 'Final Project', 'Responsiveness', 'Accessibility'],
    'focus': ['Organization', 'Planning', 'Design', 'Spotify API', 'Client Credentials authorization'],
    'code_snippet': waves_snippet,
    'school_proj': true,
    'partner': {
      'boolean': false,
      'name': '',
      'link': '',
    },
  },
  {
    'name': 'Twilight Bark Chat',
    'dates': '2/15/22 - 2/27/22',
    'pic': twilight_bark_screenshot,
    'short_desc': 'Async WebSocket chat application including full user authentication',
    'long_desc': '13-day custom full site from design to implementation based on "outside" as a prompt. Full custom user authentication, from signup to change user nameto reset password including 401 error checking. Authorized users can create and join any chat room with messages updated in realtime as well as added to database.',
    'link': 'https://github.com/RLewis11769/outside-dogs',
    'languages': ['Python', 'JavaScript', 'HTML', 'CSS'],
    'tools': ['Django', 'Tailwind CSS', 'Redis', 'AsyncWebsocketConsumer', 'Vanilla JavaScript DOM manipulation', 'SQLite3'],
    'experience': '3 months of backend development - no websocket experience',
    'subjects': ['Backend Web Development', 'Frontend Web Development', 'Custom Design', 'Custom Authentication', 'Asynchronous Programming', 'Channel consumer', 'Client-side message parsing', 'Databases', 'APIs', 'Responsiveness', 'Accessibility'],
    'focus': ['Organization', 'Planning', 'Design', 'Authentication', 'Security', 'Web sockets', 'Signals', 'Configuration'],
    'code_snippet': twilight_bark_snippet,
    'school_proj': true,
    'partner': {
      'boolean': false,
      'name': '',
      'link': '',
    },
  },
];

export default projList;
