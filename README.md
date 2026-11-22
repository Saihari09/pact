# Pact

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

5. **Put it on GitHub Pages.** Create a repository, upload `index.html` and
   `config.js` (the other files can come along too). Then Settings → Pages →
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
- **Circle calendar.** The Circle calendar tab shows one week of everyone's
  tasks, coloured by person. Tap a name to hide or show that person, and tap a
  task to open that person's plan.
- **Planning ahead.** Pick a day in the day row, or end a task with a day:
  `Gym 18:00 45m fri`.
- **Profile.** Under Your profile you can add a one-line goal, up to four
  focus areas, and how you like to be nudged. Buddies see these when they
  open your plan.
- **Progress.** Each person has a streak, a count for today and the last
  seven days, and a four-week grid showing which days had tasks finished.
- **Theme.** The sun/moon button switches between light and dark. Without a
  choice, the site follows the device setting.

## Limits worth knowing

- Nudges arrive while the site is open in a browser tab (a background tab is
  fine, and you can switch on pop-up notifications in settings). They do not
  arrive when the site is closed. Real push notifications would need a paid
  Firebase plan and extra code.
- "Use just a name" accounts live in one browser. Clearing that browser's data
  loses access to that identity. Google sign-in works across devices.
- The values in `config.js` are not secrets. The rules in `firestore.rules` are
  what protect the data, so do publish them (step 3).
