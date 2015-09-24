User.destroy_all
Question.destroy_all
Answer.destroy_all
Comment.destroy_all
Tag.destroy_all
Tagging.destroy_all

user = User.create(username: "guest", password: "password")


q1 = Question.create!(title: "Suspected voting fraud by duplicate user profiles", content: "I just encountered a user who asked a question a few days ago and got a handful of answers. But today, suddenly they updated their question and removed the acceptance from the answer, which they'd accepted earlier.

I visited their profile and found that most of their questions got down-votes from the community. Some time later I saw that suddenly all of their questions got up-votes and their reputation bumped up.

Does Stack Overflow try to identify such users/events? Because it looked like you can create another account and always up-vote all of your activity on Stack Overflow.", user_id: user.id)
q1.tag_list=("discussion, serial-voting, voting-fraud, duplicate-accounts")
a1 = q1.answers.create(content: "To answer your more general question, yes Stack Overflow and its moderators have the ability to sniff out users who create fake accounts to vote for themselves. In the most obvious cases of this, the site will automatically detect the fraudulent votes and invalidate them. For the more persistent ones, or folks who slip through the system, we have tools to detect their fraudulent voting. We deal with those people as they appear on our radar.

In this specific case, the asker of the question was a clear voting sock puppet of another user. However, none of the answers on that question were by accounts associated with that user, so them unaccepting your answer didn't directly benefit themselves. I've removed this and another sock puppet I found, suspended the main account, and blocked them from creating new accounts at their current location.

Thanks for pointing this out. If it helps you feel any better, you would have lost the points from the accept vote anyway when the sock puppet was eventually found and deleted.", user_id: user.id)
c1 = a1.comments.create(body: "Yes. The account is removed now. Thanks a lot. Can you provide some information on how to flag such users?", user_id: user.id)
c2 = a1.comments.create(user_id: user.id, body: "@abhishekbafna - If you see suspicious voting behavior for an account, and you think it's worth us acting on, cast a custom flag on one of their posts and explain what it is you saw and why you think we should look into this account. You might want to check that the system or moderators haven't already acted on the voting, because we handle a lot of these before the community notices")
c3 = a1.comments.create(user_id: user.id, body: "Thanks. I got you.")

q2 = Question.create!(user_id: user.id, title: "Replace voting arrows with stars",
	content: "I am a new programmer and was recommended to the site by several teachers and my internship boss. They all said how great of a learning tool this was. But users keep down voting my questions saying they are too easy and other things along that line. Getting down voted and those comments are very discouraging for a young coder like me, so what is the point of them? Do you not want the community to grow?")
q2.tag_list=("discussion, voting")

a2 = q2.answers.create(user_id: user.id, content: "We don't downvote people. \n

We downvote posts. Posts that are not clear. Posts that are off-topic. Posts that are not asking a question. Posts that are low quality. \n

I can go on. \n

The converse is also true - good, high quality, clear posts get upvotes. \n

Votes are not a reflection on the person - but on the post.")

a3 = q2.create(user_id: user.id, content: "The most probable reasons for downvote are : \n \n

You have just asked a question without doing any research on what you are asking. \n \n
Your question proves that you have no idea (lack minimal understanding) about what you are asking (happens loads of times with how can I do this kind of questions). \n \n
Your questions contain incomplete information or are primarily opinion based or are too broad. \n \n
Note : You usually get answers even for duplicated questions. For example - this question has been asked and answered (also, marked as duplicate) several hundred times. So, we don't close questions and downvote blindly.. We encourage people to ask more questions. But flawed ones should and will be removed to maintain quality on the site.")
