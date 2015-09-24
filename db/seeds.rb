User.destroy_all
Question.destroy_all
Answer.destroy_all
Comment.destroy_all
Tag.destroy_all
Tagging.destroy_all

u1 = User.create(username: "rayyan", password: "password")
u2 = User.create(username: "saadh", password: "password")
u3 = User.create(username: "jake", password: "password")
u4 = User.create(username: "omar", password: "password")
u5 = User.create(username: "parth", password: "password")
u6 = User.create(username: "naveen", password: "password")
u7 = User.create(username: "abhishek", password: "password")

q1 = Question.create(user_id: u1.id, title: "mysql select - if no matches for given option, match a different option", 
	content: "

	I am trying to find users in a table by their ID number. A few users don't have an ID number, so for them I want to find by birthdate. So I want a select statement that does this: \n \n

	Pseudo-code: \n \n

	SELECT user FROM users WHERE id = idnumber \n
      if that is not found, then \n
                     WHERE dob = dob \n
	I don't want to match date of birth if there is a match for id, because that will return too many results. I can do this in two separate selects, but I would like to avoid that if possible. \n \n

	I am using PHP with PDO

	"
	)
q1.tag_list=("php, mysql")
a1 = Answer.create(user_id: u2.id, question_id: q1.id, content: "
	SELECT user FROM users \n
	WHERE id = :idnumber \n
	OR (NOT EXISTS (SELECT user FROM users WHERE id = :idnumber) \n
    AND dob = :dob) 
	")
c1 = Comment.create(user_id: u1.id, answer_id: a1.id, body: "Hey, thanks for this answer man. Looks nice. Haven't used EXISTS in this case. :)")

c2 = Comment.create(user_id: u2.id, answer_id: a1.id, body: "Ah, this looks nice! x) ")

a2 = Answer.create(user_id: u3.id, question_id: q1.id, 
	content: "
	You can do this with OR and prioritization. Assuming you want only one row back: \n \n 

SELECT u.user \n 
FROM users u \n 
WHERE u.id = $idnumber or u.dob = $dob \n 
ORDER BY (u.id = $idnumber) DESC \n 
LIMIT 1; \n 
Or, if you want multiple rows back, then a variation on Barmar's solution might optimize better: \n \n 

SELECT u.user \n 
FROM users u \n 
WHERE u.id = :idnumber \n 
UNION ALL \n 
SELECT u.user \n 
FROM users u \n 
WHERE NOT EXISTS (SELECT 1 FROM users u2 WHERE u2.id = $idnumber) AND \n 
      dob = $dob; \n 
MySQL can be finicky about using indexes for OR conditions. This version will definitely use indexes on users(id) and users(dob). \n 
	")

q2 = Question.create(user_id: u4.id, title: "What can we do about incorrect tag wiki edits that get approved?", 
	content: "
	I was going back over my review history and found that I had voted contrary to the majority on this \n edit to the objective-c tag wiki excerpt. Now anybody who has developed iOS apps in any \n language other than Swift and Objective-C can tell you that the edit is factually wrong, but in \n addition, it's also irrelevant info to have in the tag excerpt. The edit was approved in the review \n queue, but then rolled back the next day by Josh Caswell. Good on him - if the story ended here, I \n wouldn't be posting to meta. \n \n

I was curious to see if erroneous edits have been approved for the tag in the past, so I went \n through the edit history for the objective-c tag excerpt, and I learned that Josh Caswell has rolled \n back changes on four separate bad edits 1 2 3 4, the second of which did nothing except to \n introduce incorrect grammar and break references to other tags. \n \n

Now if this is happening on this tag, I can only imagine it is happening on other tags as well. I feel \n like from now on if I reject a bad tag edit, I should bookmark it so I can roll it back on the off chance that it gets accepted.

First of all, is this something that anyone else has noticed happening in other tags? (Or is the objective-c tag somehow a magnet for bad edits \n \n and this isn't a problem for other tag wikis?) If so, then how can we help alleviate this problem? I don't want us to all have to adopt a tag like Josh Caswell so that we can monitor it and revert bad edits.

Perhaps we could separate the Suggested Edits review queue into Suggested Edits and \n Suggested Tag Edits, so that users don't review tag edits unless they specifically seek them out \n (and hopefully have more knowledge of the tag system)? And/or maybe we could restrict tag edit \n reviews to >10k rep? (Although with >10k there may not be enough volunteers to review tag edits). \n \n

Does this look like a problem in need of a solution, or is it okay to just rely on >20k users to roll \n back bad tag edits when they happen? Looking forward to hearing what you think.


	")

q2.tag_list=("discussion, review, suggested-edits, tag-wiki, tag-excerpt")
 

q3 = Question.create(user_id: u4.id, title: "What exactly a pawn activity consists of?",
	content: "
There's a TV show on the History Channel called Pawn Stars. \n \n 

According to American Heritage Dictionary of the English Language the pawn's definition is: \n \n 

Something given as security for a loan; a pledge or guaranty. \n 
My confusion is that no client on that show pawns their items, they simply sell them for good, so I \n wonder: since the pawn's dictionary definition can't be wrong are they doing another activity than \n the one written on their logo? \n \n

Does pawn mean that admittedly both activities pawning and buying and selling are allowed in  \n such a store? If so why is it not written on the dictionary?
	")

q3.tag_list=("word-usage, word-meaning")

a3 = Answer.create(question_id: q3.id, user_id: u1.id, content: "
	The short version is yes, people often go to a pawnshop intended to sell, rather than pawn, an \n item. This doesn't mean that the definition of 'pawn' is incomplete, though. To understand how \n this situation would arise, think about how pawnshops work: \n \n

When someone pawns an item, they are borrowing money using the item as security (exactly as \n the definition says). For a specified span of time, they can bring back the money (plus interest) \n and get the item back. However, frequently, people who pawn items are unable to come up with the \n money during that time, at which point the pawnbroker will offer the item for sale to recover the \n lent funds. \n \n

Pawn shops, as a result, become a place where a wide variety of items are available for purchase. \n Some of those items are more valuable than their owners (or even the pawnbroker) will realize, and \n so antiques dealers and other experts in obscure goods visit them, hoping to spot a valuable item \n available for cheap. \n \n

As a result of this, the pawnbroker will often be willing to straight-up purchase items, in hopes of \n making a profit selling them to those traveling dealers, and so people will come to them not only \n when they need a loan, but when they just want to sell something. \n \n

Many businesses are generally understood to offer services that are not, strictly speaking, part of \n their formal definition. For instance, gas stations almost always have a machine for re-inflating \n tires. Most pharmacies sell a variety of general household goods in addition to filling medical \n prescriptions. Banks offer safe-deposit boxes. When enough people who want one service would \n also want another, and it is convenient to provide it, businesses adapt.
	")