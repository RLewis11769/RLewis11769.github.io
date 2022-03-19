export default function Bio() {
  return (
  <div className="bio_div container">
    <div>
      <img src={require('../../assets/personal/ProfilePic.png')} alt="Profile pic" />
    </div>
    <div>
      <p>Einstein is clearly way better at brainstorming than I am. But I&apos;m 100% behind him on this: All good ideas start with great data and a plan.</p>
      <p>In my opinion, having good data is the root of good decision-making. But there&apos;s a lot of work that goes into ensuring people have access to good data, starting with gathering it, putting it into the right format, and making it accessible to those who need or want it.</p>
      <p>That&apos;s where I come in. My goal is to provide answers and solutions.</p>
      <p>I try to write clean, well-organized code that anyone can dive straight into and any tools I put out are as accessible as possible.</p>
      <p>While a student at <a href="https://holbertontulsa.com/">Holberton School Tulsa</a>, I earned the nickname &quot;Eagle Eyes&quot; due to my attention to detail. My background in writing means I&apos;m pretty good at spotting typos.</p>
    </div>
  </div>
  );
}
