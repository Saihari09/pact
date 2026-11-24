# Pact — Pair & Act

A small accountability site for you and your buddies. Everyone writes what they
will do each day, everyone can see each other's progress, and anyone can send
anyone else a nudge or a cheer.

It is a static site (GitHub Pages) plus a free Firebase project that handles
sign-in and stores the data. Setup takes about 15 minutes, once.

## Files

| File | What it is |
|---|---|
| `index.html` | The whole app |
| `config.js` | Your Firebase settings (you paste these in step 4) |
| `sw.js`, `manifest.webmanifest`, `icon-*.png` | Let phones show notifications and add Pact to the Home Screen |
| `firestore.rules` | Who may read and write what (you paste this in step 3) |

## Setup

The Firebase console changes its wording now and then. If a label below is not
exactly what you see, look for the closest match.

1. **Create a Firebase project.** Go to <https://console.firebase.google.com>,
   add a project, any name. The free plan is enough. Analytics is not needed.

2. **Switch on sign-in.** Authentication → Sign-in method → enable **Google**.
   Also enable **Anonymous** if you want the "Use just a name" button to work.

3. **Create the database.** Firestore Database → Create database → production
   mode, any nearby location. Then open the **Rules** tab, replace everything
   with the contents of `firestore.rules`, and press Publish.

4. **Connect the site.** Project settings → Your apps → add a **Web app**.
   Firebase shows a `firebaseConfig` block. Copy its `apiKey`, `authDomain`,
   `projectId` and `appId` values into `config.js`.

5. **Put it on GitHub Pages.** Create a repository, upload every file in
   this folder. Then Settings → Pages →
   deploy from the `main` branch, root folder. Your site appears at
   `https://<your-username>.github.io/<repo-name>/`.

6. **Allow your site to sign people in.** Back in Firebase: Authentication →
   Settings → Authorized domains → add `<your-username>.github.io`.

7. **Start a circle.** Open your site, sign in, create a circle, press
   **Copy invite link**, and send the link to your buddies.

## How it works

- **Circles.** A circle is a group of buddies. Each person has their own plan
  and can only edit their own. Everyone in the circle can read everyone's.
- **Invite link.** The link contains the circle's code. Anyone who has the link
  and signs in can join, so share it privately. The person who started the
  circle can remove people under Your settings → People.
- **Nudges and cheers.** Pick a person at the top, then Send a nudge or Send a
  cheer. It appears on their screen with one-tap replies: a nudge asks how it
  is going (On it, Stuck, On a break), a cheer can be thanked.
- **Circle chat.** A small chat for the whole circle, in the side column
  (the Chat button at the top jumps to it and shows how many messages are
  new). Messages are up to 140 characters, are kept for about four weeks,
  and you can delete your own. A new message beeps and, with notifications
  on, shows on the device.
- **Private messages.** The row of people above the chat switches between
  Everyone and a private conversation with one buddy ("Message privately" on
  a buddy's plan opens it too). Only the two of you can read those messages:
  the database rules refuse everyone else, including other members of the
  circle. They run up to 500 characters and are kept for about four weeks.
  This needs the `dms` section of `firestore.rules` to be published (setup
  step 3); without it the people row simply doesn't appear.
- **Editing messages.** Your own chat messages, private or to the circle,
  have a pencil next to the bin. It puts the text back in the message box;
  Send saves the change and the message is marked "edited".
- **Stuck? Ask for a call.** Under the chat, "I'm stuck · ask for a call"
  sends a call-out to the circle with an optional note and an optional
  Google Meet link. Everyone else gets a chime, a notification and a prompt
  with Join on Google Meet, Reply in chat and Not now; the Join button stays
  in the chat for two hours. Pact cannot create the meeting itself: press
  "Start a new Google Meet", copy the meeting's address and paste it in. The
  link is remembered on that device, so a reusable link needs pasting once.
  Only meet.google.com links are accepted.
- **Editing.** Press Edit on one of your tasks and retype it. The same
  shorthand works as when adding: `Gym 18:00 45m fri` sets the time, the
  length and the day.
- **Comments.** Every task has a Comment button. Anyone in the circle can
  write on it (up to 140 characters) and the task's owner gets an alert.
  Comments are kept for as long as the task's day is in view, about four weeks.
- **Circle calendar.** Everyone's tasks, coloured by person, in two views.
  The Day view is a time grid: a task with a time is a block that starts at
  its time and is as tall as its length, so everyone can see when a person is
  taken. Tasks at the same time sit side by side. A task without a length is
  drawn half an hour tall with a dashed bottom edge. Press + or an empty spot
  to add an appointment; it is added to your plan for that day too. The Week
  view shows seven days side by side. Tap a name to hide or show that person,
  and tap someone else's task to open their plan.
- **Scheduling.** The add form has optional date, time and length boxes;
  leave the time empty for a task you can do any time. In the calendar you
  can move your own tasks:
  - Day view: drag a block to another time (it snaps to 15 minutes), drag
    its bottom edge to change the length, drag an untimed task from "Any
    time" into the grid to give it a time, or drag a block onto "Any time" to
    take its time off. Pressing a block lets you type the time and length.
  - Week view: drag a task onto another day (today or later) to move it
    there. Its time and length stay.
  - With a mouse you can grab a task anywhere. On a phone, drag it by the six
    dots (or the bottom edge), so swiping over a task still scrolls the page.
- **Copy and paste in the calendar.** Press Select, press the tasks you want
  (your own or a buddy's, on any day in view), then Copy. Paste them into any
  day from today on: "Paste here" on a day in the Week view, "Paste into this
  day" in the Day view, or, after pressing + or an empty spot, "Paste at this
  time", which puts the earliest copied task at that time and keeps the
  others at the same distance from it. Pasted tasks are new to-do tasks in
  your own plan with the same words, time and length; the originals stay.
  The copy is kept until you press Clear copied, so you can paste it into
  several days. With a keyboard: Ctrl or Cmd + click selects, Ctrl/Cmd+C
  copies, Ctrl/Cmd+V pastes into the day on screen, Esc leaves Select.
- **Order of the plan.** The plan and the calendar show the same tasks, so a
  change in one appears in the other. In the plan, timed tasks come first in
  time order and untimed ones follow. To reorder, drag a task's handle (the
  six dots) onto another task, press the up or down arrow key on the handle,
  or use Move up / Move down under More. Timed tasks always keep their time
  order among themselves; untimed tasks can go anywhere, also between or
  above timed ones. "Pick one thing" shows the task at the top of the to-do
  list.
- **Dates.** Dates are links. Tap a day in the progress grid or a heading in
  the Week view to open it. "Show another day" and the add form's date box reach up to 60 days ahead.
- **Task length and focus timer.** Pick a length when adding or editing a
  task. A task in progress has a focus timer: 15, 25 or 50 minutes (with a
  3, 5 or 10 minute break), or the task's own length. Buddies see that you
  are focusing, and finished blocks are counted on the task.
- **Reminders.** Under Your profile you can set how often the app asks "still
  on it?" (any number of minutes), and how long before a timed task you get a
  heads-up. When a timed task's start time comes, a "Time to start" prompt
  appears with Start now, In 5 minutes and Not now.
- **Missed tasks.** A timed task that still isn't started 15 minutes after
  its start time is marked Missed: red in the plan, a red frame in the
  calendar, and counted next to the day's progress ("2 of 6 done · 1
  missed"). Tasks left undone on a past day are marked the same way. When a
  task tips over into missed while Pact is open, you get a chime, a
  notification and a prompt with Start now, Move to tomorrow and Not now.
  The top card puts the earliest missed task first, and the "still on it?"
  check names it when nothing is in progress. Buddies see the same marks.
- **Sounds and notifications.** Sounds are on unless you switch them off;
  notifications you switch on once under Your profile, per device. Sounds: a three-note chime when a timed task starts, a short beep
  for heads-ups, nudges and comments. A browser only lets a page make sound after you have clicked, tapped
  or typed on it since it loaded; when a sound is held back for that reason,
  the prompt says so. The sound that comes with the notification itself is
  the device's own and is set in its notification settings for your browser. Notifications appear on the device when Pact is not the window you
  are looking at. "Test it now" shows all three. On an iPhone or iPad,
  notifications need Pact added to the Home Screen first (Share → Add to Home
  Screen); that copy starts signed out, so sign in with Google there and
  paste your invite link.
- **Nudge preference.** "How buddies should nudge you" changes three things:
  the wording of nudges and self-checks you receive, the note ideas your
  buddies are offered, and, for "mostly cheers", the cheer button comes first
  and a nudge takes a second tap.
- **Month in review.** On the last day of each month, and only then, each
  person gets a few plain observations about that month (completion rate,
  strongest weekday, timed against untimed tasks, repeated tasks) with
  something to try, plus a short summary for the circle.
- **Planning ahead.** Pick a day in the day row, or end a task with a day:
  `Gym 18:00 45m fri`.
- **Profile.** Under Your profile you can add a one-line goal, up to four
  focus areas, and how you like to be nudged. Buddies see these when they
  open your plan.
- **Progress.** Each person has a streak, a count for today and the last
  seven days, and a four-week grid. Each day in the grid has a bar that fills
  as that day's plan gets done.
- **Theme.** The sun/moon button switches between light and dark. Without a
  choice, the site follows the device setting.

## Limits worth knowing

- Nudges, reminders, sounds and notifications work while the site is open (a
  background tab on a computer is fine). They do not arrive when the site is
  closed, and a phone stops a page shortly after you switch away from it or
  lock the screen. For those times, use a task's "Add to calendar" link, which
  hands the reminder to your calendar app. Real push notifications would need
  a server that sends them (a paid Firebase plan or a scheduled job) and extra
  code.
- "Use just a name" accounts live in one browser. Clearing that browser's data
  loses access to that identity. Google sign-in works across devices.
- The values in `config.js` are not secrets. The rules in `firestore.rules` are
  what protect the data, so do publish them (step 3).
