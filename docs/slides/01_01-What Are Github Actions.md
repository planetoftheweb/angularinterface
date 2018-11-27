<!-- .slide: data-state="title" -->

# Github Actions

> > Author Notes:
Developers don't like spending time doing repetitive tasks. That's because they understand computers are faster at repeating a set of instructions. Hey there, I'm Ray Villalobos and in this short course I'm going to give you an early look at new way of automating workflows using a feature from Github called Actions. We'll also build a workflow that uses actions to automatically publish your site to the Now Platform when you push a new commit to your master branch.

---

## What are Github Actions?

- Automate Github
- Triggered by events
- Integrated into Github

> > Author Notes:
- Actions are a set of instructions that help you atomate Github processes.

- They run as a result of Github events. So for example, you can do things when something happens...like a push to a repo, creating an issue, or when someone does a pull and then execute automation based on those events. Once you capture the event, you can run tests, generate builds and deploy your site onto a server automatically.

- Actions are integrated and run within Github servers, so you don't need a separate Continuous Integration or Continuous delivery platform to perform tasks...you can just build them yourself.


So if building your own tools to automate your workflows and make your life a bit easier is something that appeals to you, then it's time to take a look at Github Actions.

---
<!-- .slide: data-state="title" -->

# Github Actions
Getting Access

> > Author Notes:
Before we build anything, let's talk about how you can get access to actions.

---

## Getting Access to actions
- Public beta
- Private repos
- [Request Access](https://github.com/features/actions)
- [Documentation](https://github.com/features/actions)

> > Author Notes:

- As of the recording of this video, Github Actions is a feature that is under Public Beta. Which means that it's not completely ready for production access. Be careful when trying to use this on your applications because things might be changing quickly.

- Also, right now, actions can only run in private repos, but I expect this to change soon. However that means that to play around with them you're going to need to have a paid account and that you won't be able to use them or even see them even with a paid account in public repositories.

- In order to use actions, you'll need to request access to them. you can do that at this URL (overlay). Access is limited, so don't expect to have access to them immediately. However, more and more users will be added as time passes.

- To see if you have access to actions, go to one of your private repositories and look for the actions tab at the top of your Github repository page.

- You can find the documentation for Actions at this URL.

---
<!-- .slide: data-state="title" -->

# Github Actions
Preparing a Project

> > Author Notes:
Before we create an action, we need to prepare some things. We'll start by creating a repository and upload some files.

DEMO:
- Create a new repository
- Private with a ReadMe file (remind people that they won't be able to see the repository)
- Download the [Bootstrap 4 Layouts](https://github.com/planetoftheweb/bootstrap4layouts) template.
- Extract the `docs` folder and rename it `site`
- Drag and drop the files into the main directory and commit
- Switch over to the `actions` tab and hit the `create a new workflow` button.

---

## Anatomy of an Action
- Workflow groups
- GUI/Editor
- Events

> > Author Notes:

- Although grouped into a structure called a workflow. A workflow is just a series of related actions. If you look at the tabs at the top of this interface you'll notice that a file called main.workflow was created and will be placed inside a `.github` folder.  You may have seen this folder before if you create things like issue or pull request templates.

- Actions are built with a GUI...Graphical User Interface tool as well as by manually typing in code. The GUI will get you up and running quickly and let you visualize your actions even if you like to create them with just text.

- DEMO

- You can see under the file section that we have the option of looking at the visual editor, or edit the file directly in text. If you switch over to the `edit` tab, you'll notice that it's automatically generating the code for the workflow for you.

- The workflows are triggered by Github events and the default event as you can see in the sample workflow is the `push`. This action will execute when a collaborator pushes something to this repo. You can respond to other events and change the name of the workflow if you want. Click on the `edit` button and you'll see a form that lets you modify the name of the workflow as well as a dropdown with a comprehensive list of events that can trigger the workflow.

---

### Sample Workflow


```
workflow "IDENTIFIER" {
  on = "EVENT"
  resolves = "ACTION2"
}

action "ACTION1" {
  uses = "docker://image1"
}

action "ACTION2" {
  needs = "ACTION1"
  uses = "docker://image2"
}
```


---

## Creating Actions
- Adding actions
- Path/[Third Party](https://github.com/actions)
- Action Source

> > Author Notes:

- To add an action, you can use the visual tool to drag a node and drop it into the box provided by the GUI. This brings up another dialog box which lets you fill in the Action Details.

- The first detail is the action you want to use. You can create your own action by typing it's path here or choose a pre-defined action. For doing things like deploying to a cloud service like AWS, Azure or Zeit, you'll need to use actions from those vendors that interface with their services.

You can change the action by hitting the change button.

Let's choose to work with a preb-built action from Zeit. You can find a directory of third party actions at in the [Actions Directory]((https://github.com/actions)).

- When you choose a pre-built action, you can click on the view source link to go to the repository for that Vendor's Actions. That's a good place to go for some examples and more documentation on how the specific action works.


---

## Action Options
- Label
- Needs
- Uses
- Runs
- Arguments
- Secrets/Env

> > Author Notes:

- The GUI tool allows you to configure existing actions by letting you define a series of parameters that the actions use.

- **Label:** The label is just the name of the action. It's going to give you a default name based on what you pick, but call it whatever you want.

- **Runs:** Github actions run from a set of instructions called a `dockerfile`, so this lets you execute a specific command in that file...If you don't put anything in here, whatever is defined as your `dockerfile`'s entry point will run.

- **Args:** Another way to customize your execution is by passing along arguments. These are like settings for options you want to pass along to the `dockerfile`. You can use a string or an array here., A string with a series of commands separated by spaces will automatically convert to an array.

- **Secrets and Env:** Secrets is where you store information that you don't want to be publicly available and stored in your repo, so logins, password or security information. You can also use this section to set environment variables. Settings are only available in the visual editor or in the settings tab of your repository. You might see that we have the option of including a Github Token here. You can also create your own secrets.

---

## Using an Action

- Create a Token in Zeit
- Add a now.json file
- Copy the [action sequence](https://gist.github.com/planetoftheweb/f320a380849ca426003f7c284a3172b3)
- Create the Secrets
- Deploy
- Make a change in the code
- Re-deploy

```
{
  "name": "flicka",
  "alias": [
    "watoose"
  ]
}
```
