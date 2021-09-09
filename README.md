# yodal
Our SYNCs Hack 2021 Application.

Yodal is an audio-based community platform that helps individuals supercharge their mental health, allowing every Australian to speak out and be heard.

[LIVE](yodal.netlify.app)
[DevPost incl. pitch](https://devpost.com/software/yodal)
[Figma](www.figma.com)

# The Problem

People going through low severity mental stress, a problem only exacerbated by the current lockdowns across Australia, often struggle to find someone to speak to. A therapist feels too extreme, counsellors don't listen, and they're scared of how friends will perceive them if they express their concerns.

There's still an incredible amount of stigma that exists around "speaking out". To compound this, there are no outreach forums for individuals to join in order to feel heard and resultantly, feel better. This is a huge problem across Australia (and the World), with many 'solutions' often not providing the targeted help that users want and need.

Building a community, centred around support and anonymity is crucial in providing everyday Australians a platform that they can turn to when they aren't at their best. At its core, this is what our product, Yodal, aims to facilitate.

# The Product

Yodal is a community platform that helps individuals supercharge their mental health, by using the concept of audio to allow every Australian to be heard. Fundamentally, Yodal provides users with a platform to express their concerns, whilst also helping those around them.

Yodal allows users to post and listen to memos. In conjunction with this, users can reply to these memos in order to support others and foster the community. Both posting and replying can be conducted under the condition of anonymity, allowing users to conceal their identity whilst still being heard.

Yodal also aims to foster a self-sufficient community through the use of weekly resolutions, motivational quotes, and question prompts. These act as conversation starters that encourage users to post memos.

# The Build

We built Yodal as a web-app, using React. We also utilised styled-components in order to create an elegant and intuitive UI.

Using React components, we have been able to create multiple forums, each with unique audio memos/posts that are specific to the forum topic.

Once a user is in the app, they're able to record and listen to audio. This functionality was implemented through a javascript mic-recorder-to-mp3 package (which can be found here: https://www.npmjs.com/package/mic-recorder-to-mp3).

Confidentiality is of vital importance in our app, and so we added layers of security by adding authentication using Firebase, and also preventing unauthorised access to web pages that non-users shouldn't have access to.

We have also fetched motivational quotes using the type.fit API, which are displayed to users and can also be randomly generated.

# The Challenges

The limited timeframe was definitely the most challenging aspect of this project. We wanted to build a useful solution that had significant social impact while meeting time constraints. So we decided that we would only be building a MVP which required everyone to swallow their ego as we all had really cool features that we wanted to see.

Due to the limited timeframe, we also struggled to get validation on our idea. This led to countless hours on Discord where our team rubber-ducked with each other in an attempt to solidify an idea with tangible impact.

# The Future

Our pipeline was extensive, and we wish we had more time in order to implement some of these features.

We would also love to integrate a resources section into the app, which would provide more flexibility for users to receive advice in the form they want it. Covering this broader scope of mental health resources would increase the value we provide to users.

In addition to this, we would like to introduce community events (e.g. group meditation sessions) to foster a friendly, harmonious and welcoming environment for all users.

Implementing an algorithm to find memos that are most relevant to each user would also serve to increase the value the platform is providing to each user.

For additional confidentiality, we will provide a voice filter option on top of a user's recorded audio.

# Built With

+ css-flexbox
+ css-grid
+ figma
+ figma-jam
+ firebase
+ javascript
+ jsx
+ mic-recorder-to-mp3
+ netlify
+ photoshop
+ premierepro
+ react
+ styled-components
+ type.fit
