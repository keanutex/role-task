## Spotted Zebra Backend Take Home Assignment

## Prerequisits
npm

nodejs e.g. version 16.13.0 or higher

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

## Test

```bash
# unit tests
$ npm run test
```


## Overview
This server contains:

Role Skill Profile Service - used to manage roles and the skills that are required for success in the given role.

Personal Skill Profile Service - used to manage users and thier associated skills.  Each skill associated with a user has a score associated with that user/skill.

Matcher Service - this matches users to roles and calculates the user's score for each role.  The score is calculated using the average of the users skill scores for each skill contained in the Role Skill Profile.

## Connecting to the server

Once you have started the server, go to the following page in your browser:
http://localhost:3000/

You should see "Hello World!"

Run the matchAll() using:
http://localhost:3000/Matcher/MatchAll

## Your task
Complete the method MatcherService->matchAll() which should also result in the existing unit tests passing (no change required).
