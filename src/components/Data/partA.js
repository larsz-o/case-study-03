const partA = (
  // to do: create an "END" state - with a general reflection question.
 {
    "1": {
      question:
        `<p>You and Mr. Zimmerman are asked to design a pilot program to support the security officers. Your goals for the pilot are to:</p>
        <ol>
        <li>Acknowledge the security officers’ contributions to workplace safety and exposure to workplace violence.</li>
        <li>Educate security officers about the clinical services offered by CSRPG.</li>
        <li>Discuss basic psychological first aid and coping skills.</li>
        </ol>
<p>HWhat is your first course of action?</p>`,
      options: [
        { text: `Begin to tailor the workshop series curriculum just for security officers, with Mr. Zimmerman’s input.`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This is not a bad choice, but there is a better option. It’s a great idea to work with Mr. Zimmerman to create trainings that will better serve this population, but try connecting with the security officers themselves first.` },
        { text: `Attend security officer huddles to introduce yourself and the curriculum you offer through CSRPG.`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This is the best choice in this situation. By attending the security officer huddles, you can begin to get to know them so that you can better tailor the workshops to their needs.` },
        {text: `Send out an email invitation to all security officers, asking them to join existing CSRPG sessions.`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This is not the best choice. You know that some security officers are already technically invited to the existing CSRPG workshops, but they’re not attending due to the inflexibility in their schedules.`}
        
      ],
      multipleSelect: false,
      type: "choice"
    }, 
    "2": {
      question: `<p><strong>You join a series of huddles with security officers during their regular huddle time with supervisors.</strong></p>

      <p>During this time, you share information about CSPRG during the huddles to familiarize security officers with the services offered. These huddles served as a platform through which to introduce and schedule the workshops. The officers in the first (day) and second (mid-day) shifts were interested in what you had to say and gave some good suggestions for workshops they’d like to attend. </p>
      <p>In a huddle with the third (night) shift group, however, you notice that while the officers are friendly to you, most of them are eager to move on from the meet and greet. They appear distracted when you introduce yourself and share information about CSPRG programming, describing how they will receive email invitations to sign up for workshops that interest them.</p>
      <p>What do you do next?</p>
      `, 
      options: [
        { text: `Thank everyone for their time and check in with Mr. Zimmerman the following day about moving forward with the plan for programming.`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This isn’t the best choice in this situation. There may be other reasons why this group is not engaging with you. Try to find out why.` },
        { text: `Decide that this shift doesn’t seem interested in workshops and that you may need to come up with another option for them.`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This isn’t the best choice in this situation. There may be other reasons why this group is not engaging with you. Try to find out why.` },
        { text: `Ask the group if they have any questions about what you and CSRPG can offer them.`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This is the best choice. You can’t assume why this group is not engaging with you. Ask them an open-ended question to see if you can find out more.` },
      ],
      multipleSelect: false,
      type: "choice", 
  }, 
  "3": {
      question: `<p><strong>You take a moment to pause and say to the group, “Does anyone have any questions about what I just shared?”</strong></p><p>There is a stretch of silence, but you sit in it and wait for someone to speak up. A few people make some inaudible noises - clearing their throats, sighing, muttering and laughing under their breath - before one of the supervisors speaks up.</p><p>“We appreciate your time, but what is any of this going to do? We can’t leave our posts - and all of this stuff wasn’t made for us.”</p><p>What do you say next?</p>`,
      options: [  { text: `“I was told that you would be given time to attend. You can talk to Mr. Zimmerman about the specifics. I’m just here to let you know about what we have to offer.”`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This is not the best choice. You have a chance to engage with the concerns from the group here. Try to ask a question to learn more about the barriers they’re noticing.` },{ text: `“The officers on the other shifts seemed to like what I shared. Maybe you should talk to them about what interested them.”`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This is not the best choice. You have created a larger barrier between this group and the CSRPG by refusing to engage with their concerns.` },{ text: `“I will work out the scheduling piece with Mr. Zimmerman. What types of workshops would you be interested in attending if you didn’t have to worry about the logistics?”`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This is the best choice. You assured the officers that their logistical concerns would be taken care of and engaged more deeply with their needs.` },
      ], 
      multipleSelect: false, 
      type: "choice", 
      popUp: true,
      popUpContent: `What emotions might you be feeling in this moment? What do you think the security officers are feeling? How might race, class, and gender be impacting the feelings in this situation?`
     
  },
  "4": {
    question: `<p>Once you assured the night shift officers that they would be able to attend the workshops and that you were open to hearing their feedback, they began to share their ideas with you freely.</p>
<p>You collaborated on twelve 30 minute briefings with security staff. Two-thirds were held in the
morning and the remaining one-third in the afternoon to connect with officers across all shifts.</p>
<p>Officers were invited (via a sign up sheet) to sign up for a CSRPG workshop during the briefings. Officers received gift bags at the end of each briefing to thank them for their time.</p>

<p>Thirty-minute workshops focused on resilience were held at times the security operational manager identified as best based on staffing coverage. Officers were paid for time they spent attending workshops. Workshops held in the morning were designed for the overnight and morning shifts and afternoon workshops for the evening shifts.</p><p>Twelve workshops were held over six weeks facilitated by the chaplain, a psychologist or a psychiatrist. Workshop themes included:</p>
<ul><li>Mind Your Body (self-care)</li>
<li>Mind Your Circle (social support)</li>
<li>Face Your Fears, Mind Your Spirit (spirituality/religion)</li>
<li> Build Your Hope (realistic optimism)</li>
<li>Social Justice (community resilience)</li></ul>
<p>A total of 25 officers attended the 12 briefings. Sixteen attended workshops. Workshop participants described workplace and personal challenges including the public’s non-compliance with hospital policies, personal loss and grief, overthinking situations, and social withdrawal. The security department operations manager said officers requested additional workshops after the initial series concluded. Despite protected time to attend
workshops, none of the security officers were able to attend all six due to time conflicts.
</p>`,
    multipleSelect: false, 
    type: "none"
},
"5": {
  question: `<p>After the pilot was complete, the hospital administration asked for data from your team to validate the program’s effectiveness. 
</p>

<p>How should you approach the assessment?</p> 

`,
  multipleSelect: false, 
  type: "choice",
  options: [{text: `Send a survey out to all participants to ask for their feedback.`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This isn’t a bad choice, but remember that security officers may not have the time to respond to emails during their shifts. Consider another option.` }, {text: `Send attendance records to the administration, along with a list of workshop topics.`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This isn’t the best choice, as attendance isn’t the most critical metric for determining if the program was successful since you know that none of the officers could attend all six workshops.` }, {text: `Hold short listening sessions during each shift with security officers to solicit their feedback.`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This is the best choice, as it allows you to hear directly from the officers about their experiences in a setting that works with their schedules.` }]
  },
  "6": {
    question: `<p>Following the pilot program, a regular schedule of CSRPG offerings for security officers was during huddles.</p><p>Based on feedback in the pilot program, briefings were shortened to 20 minutes and focused on validation, provisioning resources, discussing psychological first aid, and coping. The workshops were discontinued based on attendance and staff availability to lead them. </p><p>Three-quarters of the security officers (89.5% men, 95.2% people of color) have attended a briefing with research indicating a generally positive reception. Specific testimonials included “The workshops filled a void that existed before,” “The workshops offer a good place to talk about [stressors] unadulterated,” and “I only wish the workshops were longer.”</p><p>Following these initial offerings, the success of this effort led the program to be planned or offered at three other hospitals in this health system.</p>`,
    multipleSelect: false, 
    type: "none", 
    end: true
    },
  
}
)
export default partA;