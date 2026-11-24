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
- **Editing.** Press Edit on one of your tasks and retype it. The same
  shorthand works as when adding: `Gym 18:00 45m fri` sets the time, the
  length and the day.
- **Comments.** Every task has a Comment button. Anyone in the circle can
  write on it (up to 140 characters) and the task's owner gets an alert.
  Comments are kept for as long as the task's day is in view, about four weeks.
- **Circle calendar.** Everyone's tasks, coloured by person, in two views.
  The Day view lists the day hour by hour: press + on an hour to add an
  appointment, and it is added to your plan for that day too. A task with a
  length also shows in the hours it runs through, so others can see when you
  are taken. The Week view shows seven days side by side. Tap a name to hide
  or show that person, and tap a task to open that person's plan.
- **Scheduling.** The add form has optional date, time and length boxes;
  leave the time empty for a task you can do any time. In the calendar's Day
  view you can drag one of your own tasks onto an hour to schedule it, or
  onto "Any time" to take its time off. Pressing the task and typing a time
  does the same without dragging.
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
- **Sounds and notifications.** Switch each on once under Your profile, per
  device. Sounds: a three-note chime when a timed task starts, a short beep
  for heads-ups, nudges and comments. The choice is remembered, but a browser
  only lets a page make sound after you have tapped or typed on it since it
  loaded. Notifications appear on the device when Pact is not the window you
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
