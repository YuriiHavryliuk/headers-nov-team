FE-November Team: Page with Headers
===============

Production: [`https://mateacademy-fe-july.github.io/headers-nov-team/`](https://mateacademy-fe-july.github.io/headers-nov-team/)

Prerequisites
-------------
Required software: `gulp`

Install
-----------------
```
git clone https://github.com/MateAcademy-FE-July/headers-nov-team.git && cd headers-nov-team
npm install
```

Launch
-------
```
gulp watch
```
Navigate to [http://localhost:3000](http://localhost:3000)

How to work with this repo:
---------------------------

* ##### Only ENGLISH, please.
* ##### Be polite

* #### If you want to start work on your new feature, please, follow these steps:
1. `git pull` to get fresh master branch
2. `git checkout -b VM-my-new-feature` to create new branch. ****VM**** is your initials.
3. `gulp watch` to start gulp watching your changes. Now page is available on [http://localhost:3000](http://localhost:3000)
4. make some magic with html, js and add some styles with scss :)
5. `git status` to see files that were changed
6. `git add my-changed-file` to add file which will be commited
7. `git commit -m 'add awesome new feature' -m 'additional information about what was changed'` to create commit with changed files. Please, provide informative commit messages, so that it will be easy to understand, what you've changed in this commit
8. `git push origin VM-my-new-feature` to push your commit to remote branch.
9. Repeat step `7` & `8` until you finish your new feature. Don't hesitate to do as much commits, as you wish. It is better to do small commits with small working changes than one huge commit with 1000+ changed lines.
10. Visit repo [github page](https://github.com/MateAcademy-FE-July/headers-nov-team). Now you can see flash message which offers you to create *****New Pull Request***** . Let's create it! :) 
11. After approving your pull request, you will be allowed to merge your pull request with master branch. 
12. `git checkout master`
13. `git pull` to get fresh master with your new feature. After that go back to step 2 and start to work on your next feature

* #### Everybody is working on their own header so, please, follow structure rules:

  For example if you create third header:
    * add styles to `app/styles/headers/_third.scss`. 
    * in `app/index.html` make changes only inside `<div class="header header__third"></div>`.
  It is easier to follow this rules, than resolve merge conflicts ;)

* #### Please, do not run `gulp build` command in the terminal and do not make any changes to `docs/` folder.
  Production will be builded by PM after approving and merging your pull request

* #### Please, when you create pull request, add screenshot in the description, so that all your teammates can see, what you've done, without pulling your branch  

* #### You are always welcome to watch through your mates' pull requests and leave some comments:
  * Please, always be polite. 
  * If you want to suggest better solution for some code, write your comment with code example.
  * Write your comments on the line, where you think that something wrong. 
  * If you think, that pull request is perfect, please, add comment or smile under pull request, so that all the other teammates can see, that you reviewed this pull request
