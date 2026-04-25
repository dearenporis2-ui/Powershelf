// ════════════════════════════════════
//  BOOK DATA — Atomic Habits
// ════════════════════════════════════
const ATOMIC_CHAPTERS = [
  {
    n: 1,
    name: "The Surprising Power of Atomic Habits",
    tag: "Tiny changes, remarkable results — 1% better every day",
    part: "The Fundamentals",
    summary: "British Cycling hired Dave Brailsford in 2003, and he applied a philosophy of 'aggregation of marginal gains' — improving every aspect of cycling by just 1%. Within five years, the British team dominated the Tour de France. The lesson: habits are the compound interest of self-improvement. Getting 1% better every day means being 37 times better by year's end. Most people overestimate the effect of a single decision and underestimate the power of repeated small improvements.",
    keys: [
      "Habits are the compound interest of self-improvement — small gains accumulate into massive results",
      "1% better every day leads to being 37x better in a year; 1% worse every day leads to near zero",
      "The effects of habits are delayed — you don't notice progress until you cross a critical threshold",
      "Breakthrough moments are the result of accumulated prior work, not sudden lucky events",
      "Focus on systems, not goals — winners and losers often share the same goals; only their systems differ"
    ],
    quote: "You do not rise to the level of your goals. You fall to the level of your systems."
  },
  {
    n: 2,
    name: "How Your Habits Shape Your Identity",
    tag: "True behavior change is identity change",
    part: "The Fundamentals",
    summary: "There are three layers of behavior change: outcomes (what you get), processes (what you do), and identity (what you believe). Most people start with outcomes. The most effective approach starts with identity. Every action you take is a vote for the type of person you want to become. Say 'I am a runner' instead of 'I am trying to run.' The goal is not to read a book — the goal is to become a reader. Habits are how you prove your identity to yourself.",
    keys: [
      "Identity-based habits start from the inside out: who you wish to become shapes what you do",
      "Every action is a vote for your identity — habits accumulate evidence of who you are",
      "Outcome-based habits focus on what you want; identity-based habits focus on who you want to be",
      "Your current identity was built by your previous habits — and can be rebuilt by new ones",
      "The most practical way to change who you are is to change what you do, one small act at a time"
    ],
    quote: "Every action you take is a vote for the type of person you wish to become."
  },
  {
    n: 3,
    name: "How to Build Better Habits in 4 Simple Steps",
    tag: "The habit loop: cue, craving, response, reward",
    part: "The Fundamentals",
    summary: "All habits follow a four-step loop: cue, craving, response, reward. The cue triggers the habit. The craving provides the motivation. The response is the actual behavior. The reward satisfies the craving and teaches the brain to repeat the loop. To build good habits: make the cue obvious, make the craving attractive, make the response easy, make the reward satisfying. To break bad habits: invert each law — make it invisible, unattractive, difficult, and unsatisfying.",
    keys: [
      "The four stages of habit: cue, craving, response, reward — understanding each is essential",
      "Cues are neutral — it's the craving they trigger that drives behavior",
      "The Four Laws of Behavior Change are a simple framework for designing any habit",
      "To build good habits: obvious, attractive, easy, satisfying. To break bad habits: invert each",
      "Habits do not restrict freedom — they create it. Automating the routine frees the mind for higher things"
    ],
    quote: "A habit is a behavior that has been repeated enough times to become automatic."
  },
  {
    n: 4,
    name: "The Man Who Didn't Look Right",
    tag: "Make good habits obvious — design your cues deliberately",
    part: "The 1st Law: Make It Obvious",
    summary: "A cardiologist could spot a patient in heart failure from across the room — not from any single symptom, but from dozens of tiny nonverbal cues that his brain had processed subconsciously through years of experience. Habits work the same way: they run on autopilot beneath awareness. The Habits Scorecard — writing down every daily behavior — is the first step to noticing your patterns. You cannot change what you do not see.",
    keys: [
      "Most habits run unconsciously — awareness is the critical first step before change is possible",
      "The Habits Scorecard: write out your daily behaviors and label each as positive, negative, or neutral",
      "Point-and-call raises habit awareness by verbalizing what you're about to do — used in Japan's rail system",
      "Implementation intentions — 'I will [behavior] at [time] in [location]' — dramatically increase follow-through",
      "The brain encodes habits as patterns; once triggered, they run automatically without conscious thought"
    ],
    quote: "Until you make the unconscious conscious, it will direct your life and you will call it fate."
  },
  {
    n: 5,
    name: "The Best Way to Start a New Habit",
    tag: "Stack habits and anchor them to time and place",
    part: "The 1st Law: Make It Obvious",
    summary: "Implementation intentions ('I will [BEHAVIOR] at [TIME] in [LOCATION]') are among the most effective strategies for starting a new habit. Habit stacking — pairing a new habit with an existing one using the formula 'After I [CURRENT HABIT], I will [NEW HABIT]' — creates a chain of automatic behaviors. The key is specificity: vague intentions fail; concrete plans with triggers and locations dramatically improve follow-through.",
    keys: [
      "Implementation intentions: state exactly when, where, and how you will perform a new behavior",
      "Habit stacking: anchor a new habit immediately after an existing one to chain behaviors together",
      "The more specific the plan, the more likely the habit — 'I will meditate for 1 minute after my coffee'",
      "Motivation is overrated; what you really need is a clear plan and a reliable cue",
      "Map your existing habits — they are the scaffolding on which to hang every new behavior"
    ],
    quote: "The simple way to apply this strategy: after I [CURRENT HABIT], I will [NEW HABIT]."
  },
  {
    n: 6,
    name: "Motivation Is Overrated; Environment Often Matters More",
    tag: "Design your environment to make good behaviors the default",
    part: "The 1st Law: Make It Obvious",
    summary: "People often think they lack motivation, when the real issue is a poorly designed environment. Behavior is shaped by context more than character. Anne Thorndike changed the cafeteria layout at a hospital, putting water where soda had been, and soda consumption fell dramatically without anyone being told anything. You are not a disciplined person — you are a person who has designed an environment that makes discipline unnecessary. Make the cues of good habits visible; make the cues of bad habits invisible.",
    keys: [
      "Environment is the invisible hand that shapes behavior more than motivation or willpower",
      "Every habit is initiated by a cue — design your spaces so good cues are obvious and constant",
      "Want to read more? Put the book on the pillow. Want to practice guitar? Put it in the middle of the room",
      "Reduce the friction associated with good behaviors; increase the friction around bad ones",
      "Context is king: associate each space with one activity — your desk for work, your bed for sleep only"
    ],
    quote: "You don't have to be the victim of your environment. You can also be the architect of it."
  },
  {
    n: 7,
    name: "The Secret to Self-Control",
    tag: "Disciplined people structure their lives to need less discipline",
    part: "The 1st Law: Make It Obvious",
    summary: "Self-control is a short-term strategy, not a long-term solution. Willpower is a depletable resource. Research on 'disciplined people' shows they are not more virtuous — they simply spend less time in tempting situations. The solution to bad habits is not to rely on willpower but to cut the habit off at its source: eliminate the cue. Make bad habits invisible. The people with the best self-control need it least — they've designed a life where they rarely need to use it.",
    keys: [
      "Disciplined people structure their environments to need less willpower — self-control is a design problem",
      "Willpower is finite and unreliable — the better strategy is to reduce exposure to temptation",
      "Once a cue-craving pattern is encoded, it is nearly impossible to eliminate — redirect it instead",
      "The secret: remove the cue that triggers the unwanted behavior rather than fighting the craving",
      "A temporary environment change (avoiding a place, a person, a routine) can break a habit's grip"
    ],
    quote: "People with high self-control tend to spend less time in tempting situations. It's easier to avoid temptation than resist it."
  },
  {
    n: 8,
    name: "How to Make a Habit Irresistible",
    tag: "Use temptation bundling to make good habits attractive",
    part: "The 2nd Law: Make It Attractive",
    summary: "Habits that are attractive are more likely to be repeated. Dopamine is released not just when you experience pleasure but when you anticipate it — desire, not satisfaction, is the engine of habit. Temptation bundling pairs something you want to do with something you need to do. The Premack Principle: more probable behaviors reinforce less probable ones. 'I will only listen to my favorite podcast while running' makes the hard habit attractive by linking it to an immediate reward.",
    keys: [
      "Dopamine is the anticipation chemical — craving drives action more than pleasure does",
      "Temptation bundling: only do something you enjoy during or after a habit you need to build",
      "Make the habit immediately pleasurable by linking it to something already attractive to you",
      "The more attractive an opportunity appears, the more likely you are to form a habit around it",
      "Reframe hard habits: instead of 'I have to exercise,' say 'I get to build a stronger body'"
    ],
    quote: "The habit needs to be enjoyable for it to last. What is immediately rewarded is repeated."
  },
  {
    n: 9,
    name: "The Role of Family and Friends in Shaping Your Habits",
    tag: "Join a culture where your desired behavior is the normal behavior",
    part: "The 2nd Law: Make It Attractive",
    summary: "Humans are deeply social creatures who have evolved to mimic the habits of those around them. We imitate three groups especially: the close (family and friends), the many (the tribe), and the powerful (those with status). One of the most effective strategies for building a habit is to join a community where that behavior is the norm. When a behavior is normal in your group, your brain sees it as attractive — belonging is a deep human drive that can be harnessed for habit formation.",
    keys: [
      "We imitate the habits of those we admire — proximity is the most powerful habit tool",
      "Join a group where your desired behavior is the default: runners' clubs, study groups, mastermind circles",
      "The tribe's norms feel true to us — belonging to the right group rewires what feels normal",
      "Imitating the successful is rational — their habits are evidence that the behavior works",
      "Social accountability is a powerful force: the tribe's approval is an immediate reward"
    ],
    quote: "One of the most effective things you can do to build better habits is to join a culture where your desired behavior is the normal behavior."
  },
  {
    n: 10,
    name: "How to Find and Fix the Causes of Your Bad Habits",
    tag: "Every craving is a deeper underlying motive in disguise",
    part: "The 2nd Law: Make It Attractive",
    summary: "Every behavior is driven by an underlying motive — a basic human need that the habit is trying to satisfy. Smoking satisfies a desire to reduce stress. Social media satisfies a need to connect. The habit is just the current solution your brain has found to an ancient problem. To break bad habits, reframe them: understand the deeper need they serve, then find a more beneficial behavior to serve the same need. Make the bad habit unattractive by highlighting its true costs.",
    keys: [
      "Bad habits are attempts to solve ancient human needs with modern solutions",
      "Cravings are surface-level manifestations of deeper motives: security, love, connection, status",
      "To change a bad habit, find a better behavior to satisfy the same underlying need",
      "Reframing a habit changes how you feel about it: highlight its costs, not its benefits",
      "You can make almost any bad habit unattractive by writing out all its negative consequences in vivid detail"
    ],
    quote: "Habits are attractive when we associate them with positive feelings and unattractive when we associate them with negative feelings."
  },
  {
    n: 11,
    name: "Walk Slowly, but Never Backward",
    tag: "Be in motion versus being in action — repetition beats planning",
    part: "The 3rd Law: Make It Easy",
    summary: "Motion feels like progress but often isn't. You can plan, research, and strategize without ever doing the thing. Action is when you execute and produce an actual result. Habit formation is about frequency, not time. The more you repeat a behavior, the more your brain physically rewires neural pathways to support it — this is why 'reps' matter more than intention. The most effective way to start a habit is to start incredibly small and repeat it often.",
    keys: [
      "Being in motion (planning, researching) is not the same as being in action (doing the thing)",
      "Habit formation depends on frequency, not duration — 50 reps beats 1 long session",
      "The brain physically rewires itself around behaviors that are repeated frequently",
      "Automaticity — the point where a behavior requires minimal mental effort — comes from repetition",
      "You don't need to be perfect; you need to repeat. Imperfect action beats perfect inaction"
    ],
    quote: "Habits form based on frequency, not time. It's about how often you perform a behavior, not how long."
  },
  {
    n: 12,
    name: "The Law of Least Effort",
    tag: "Reduce friction — make it as easy as possible to do right",
    part: "The 3rd Law: Make It Easy",
    summary: "Human behavior follows the law of least effort: given a choice, people will gravitate toward the option requiring the least amount of work. This is not laziness — it is evolution. Design your habits to work with this law, not against it. Every habit requires energy; reduce the friction so the habit demands the least effort possible. Meal prep on Sunday, set out your gym clothes the night before, put the book on the pillow. Environment design is the master skill of habit formation.",
    keys: [
      "The law of least effort: humans naturally choose the path requiring the least work",
      "Work with human nature, not against it — reduce friction around good habits to near zero",
      "The greater the obstacle between you and a good behavior, the less likely you are to do it",
      "Addition by subtraction: remove the steps that come between you and your best behaviors",
      "Prepare your environment the night before so that the best behavior is the easiest one in the morning"
    ],
    quote: "The less friction associated with a habit, the more likely it is to occur."
  },
  {
    n: 13,
    name: "How to Stop Procrastinating by Using the Two-Minute Rule",
    tag: "When you start a new habit, it should take less than two minutes to do",
    part: "The 3rd Law: Make It Easy",
    summary: "The Two-Minute Rule: when starting any new habit, scale it down to something you can do in under two minutes. 'Read before bed' becomes 'read one page.' 'Run 3 miles' becomes 'put on my running shoes.' The goal is to make starting easy — because starting is often the hardest part. Once you've built the habit of starting, you naturally expand. A habit must be established before it can be improved. Mastery starts with the ritual of showing up.",
    keys: [
      "The Two-Minute Rule: every new habit should take under two minutes to begin",
      "Starting is the hardest part — make it so easy that starting is the only challenge",
      "A habit must be established before it can be optimized; showing up comes before performing",
      "Ritualize the beginning of a process — getting ready to work is more important than the work itself",
      "Gateway habits are small behaviors that naturally lead to larger, more productive routines"
    ],
    quote: "A new habit should not feel like a challenge. The actions that follow can be challenging, but the first two minutes should be easy."
  },
  {
    n: 14,
    name: "How to Make Good Habits Inevitable and Bad Habits Impossible",
    tag: "Commitment devices lock in good future behavior",
    part: "The 3rd Law: Make It Easy",
    summary: "A commitment device is a choice you make in the present that locks in a better behavior in the future. Odysseus had himself tied to the mast to resist the Sirens — he couldn't act on his craving even if he wanted to. Removing the temptation entirely is more effective than trying to resist it in the moment. Technology can automate good habits: automatic savings, scheduled workouts, website blockers. The best way to break a bad habit is to make it physically impossible to perform.",
    keys: [
      "Commitment devices: make good choices in advance so future-you has no choice but to follow through",
      "Automate as many good habits as possible — technology is the ultimate commitment device",
      "Remove the ability to perform bad habits rather than relying on willpower in the moment",
      "One-time choices (like buying a smaller TV or canceling a subscription) can deliver lifelong returns",
      "Secrets to success: what requires self-control in the moment can often be automated away entirely"
    ],
    quote: "The best way to break a bad habit is to make it impractical to do. Increase friction until you don't do it."
  },
  {
    n: 15,
    name: "The Cardinal Rule of Behavior Change",
    tag: "What is immediately rewarded is repeated; what is immediately punished is avoided",
    part: "The 4th Law: Make It Satisfying",
    summary: "The final requirement of habit formation is satisfaction. We are wired for immediate reward. The time delay between a behavior and its long-term consequences means our brains are not naturally inclined to make good choices for the future. The solution: add an immediate reward to good habits and an immediate cost to bad ones. Even small, symbolic rewards — moving a paper clip, tracking a streak — create the feeling of progress and satisfaction that makes a behavior worth repeating.",
    keys: [
      "The cardinal rule: what is immediately rewarded is repeated; what is immediately punished is avoided",
      "The more immediate the pleasure of a bad habit, the more friction needed to deter it",
      "Add immediate reinforcement to habits whose payoff comes only in the long term",
      "Feeling successful, even in small ways, is fuel — design your habits to produce early wins",
      "Visual measures of progress (journals, charts, streaks) create immediate satisfaction from delayed-payoff habits"
    ],
    quote: "The first three laws of behavior change — make it obvious, attractive, and easy — increase the odds that a behavior will be performed. The fourth law — make it satisfying — increases the odds that a behavior will be repeated."
  },
  {
    n: 16,
    name: "How to Stick with Good Habits Every Day",
    tag: "Never miss twice — the habit of keeping your habit",
    part: "The 4th Law: Make It Satisfying",
    summary: "Habit tracking — marking an X on a calendar for every day you complete a habit — is one of the most satisfying tools for behavior change. It creates a visual streak that makes progress obvious, and the streak itself becomes a motivator. But the real rule is not 'never miss' — it's 'never miss twice.' Missing once is an accident; missing twice is the start of a new (bad) habit. The goal is to get back on track as fast as possible after any disruption.",
    keys: [
      "Habit tracking makes progress obvious and creates an immediate satisfying reward (the X on the calendar)",
      "The streak is motivating in itself — don't break the chain",
      "Never miss twice: one bad day is an accident; two bad days is the beginning of a new habit",
      "The 'all or nothing' mindset kills habits — showing up imperfectly is infinitely better than not showing up",
      "When you can't do the full habit, do a smaller version: run one minute, write one sentence, do one pushup"
    ],
    quote: "The first mistake is never the one that ruins you. It is the spiral of repeated mistakes that follows."
  },
  {
    n: 17,
    name: "How an Accountability Partner Can Change Everything",
    tag: "Immediate social cost makes bad habits immediately painful",
    part: "The 4th Law: Make It Satisfying",
    summary: "An accountability partner creates an immediate social cost for inaction, turning a habit that has only long-term consequences into one with immediate ones. Habit contracts — written agreements with specific penalties for breaking a behavior — add friction to bad habits and make the cost of failure immediate and personal. Thomas Frank, a YouTuber, scheduled an automated embarrassing tweet to go out every day he failed to wake up on time. The threat of social embarrassment works.",
    keys: [
      "An accountability partner creates an immediate social consequence for breaking a habit",
      "Habit contracts make the cost of bad behavior real, specific, and immediate",
      "Social accountability is one of the oldest and most powerful human motivators",
      "Knowing someone else is watching dramatically increases follow-through on commitments",
      "The feeling of letting down a person you respect is more painful than most internal consequences"
    ],
    quote: "The more immediate the pain of a bad behavior, the less likely it is to occur."
  },
  {
    n: 18,
    name: "The Truth About Talent",
    tag: "Genes do not determine your destiny — they determine your areas of opportunity",
    part: "Advanced Tactics",
    summary: "Genes predispose certain people to excel in certain habits — but they do not guarantee success or failure. The key is to build habits that align with your natural inclinations and personality rather than fighting your biology. When you can't win by being better, win by being different. Choose the game that matches your strengths. The way to maximize your chances of success is not to try to be great at everything, but to find the field where your particular combination of traits becomes a superpower.",
    keys: [
      "Genes load the gun, but environment pulls the trigger — both matter enormously",
      "The secret to maximizing your potential: choose the right game for your natural traits",
      "The Big Five personality traits strongly predict which habits you'll find natural versus grueling",
      "When you can't be better, try to be different: find the specific niche that magnifies your strengths",
      "Work hard at things that feel effortless to you — others' ceilings are often your floor"
    ],
    quote: "Genes do not determine your destiny. They determine your areas of opportunity."
  },
  {
    n: 19,
    name: "The Goldilocks Rule: How to Stay Motivated in Life and Work",
    tag: "Peak motivation comes from working at the edge of your current ability",
    part: "Advanced Tactics",
    summary: "The Goldilocks Rule: humans experience peak motivation when working on tasks that are right at the edge of their current abilities — not too easy (boring), not too hard (overwhelming). The greatest threat to long-term success is not failure but boredom. Professionals stick to the schedule; amateurs let life get in the way. Variable rewards — the uncertainty of 50/50 outcomes — keep motivation high. Embrace the boredom of good habits as a sign of mastery rather than a signal to stop.",
    keys: [
      "The Goldilocks Zone: the challenge must be just manageable — too easy or too hard kills motivation",
      "The greatest threat to your success is not failure — it's boredom and the desire for something new",
      "Variable rewards (sometimes winning, sometimes not) produce the highest level of dopamine",
      "Professionals maintain their habits on bad days; that consistency is what separates them from amateurs",
      "Mastery requires falling in love with boredom — the willingness to repeat what works, endlessly"
    ],
    quote: "The greatest threat to success is not failure but boredom. We get bored with habits because they stop delighting us."
  },
  {
    n: 20,
    name: "The Downside of Creating Good Habits",
    tag: "Habits deliver freedom — but only if you layer deliberate practice on top",
    part: "Advanced Tactics",
    summary: "Habits are essential but insufficient for mastery. Once a habit is automatic, you stop noticing your errors. Mastery requires layering deliberate practice on top of automation — constantly refining and reviewing your performance. The solution is a system of regular self-reflection: annual reviews and integrity reports. Never mistake being in motion for moving toward the target. The purpose of habits is to free your mind to focus on the next challenge, not to coast indefinitely.",
    keys: [
      "Habits free up mental bandwidth — but only if you layer deliberate improvement on top of them",
      "Automaticity is a double-edged sword: it prevents effort but also prevents noticing errors",
      "Regular reflection and review — annual or quarterly — keep your habits aligned with your goals",
      "Your identity can become your prison: 'I'm a runner' prevents you from evolving beyond it",
      "Keep your identity flexible: 'I'm the type of person who pursues health' — not just 'I am a runner'"
    ],
    quote: "Reflection and review is the process of making sure your habits remain valuable and don't become prison bars."
  }
];
