// ════════════════════════════════════
//  ART OF WAR DATA
// ════════════════════════════════════
const ART_OF_WAR_CHAPTERS = [
  {
    n:1, name:"Laying Plans", tag:"The five constant factors of war",
    summary:"Sun Tzu outlines five constant factors that govern the outcome of war: the Moral Law (unity between ruler and people), Heaven (conditions of time), Earth (terrain and distances), the Commander (virtues of leadership), and Method and Discipline (organization). He who knows these will be victorious; he who knows them not will fail.",
    keys:["Victory belongs to those who plan and calculate","The five factors: Moral Law, Heaven, Earth, Commander, Method","Modify plans according to favorable circumstances","All warfare is based on deception"],
    quote:"All warfare is based on deception.",
    verses:[
      "The art of war is of vital importance to the State. It is a matter of life and death, a road either to safety or to ruin.",
      "The art of war is governed by five constant factors: the Moral Law, Heaven, Earth, the Commander, and Method and Discipline.",
      "The general who wins a battle makes many calculations before the battle is fought. The general who loses a battle makes but few calculations beforehand."
    ]
  },
  {
    n:2, name:"Waging War", tag:"The cost and economy of war",
    summary:"Sun Tzu emphasizes that prolonged war exhausts a state's resources and weakens its people. Victory must come quickly. A wise general forages on the enemy's resources rather than draining his own. The ultimate goal is victory, not lengthy campaigns.",
    keys:["Prolonged war weakens even the victor","Speed is essential to preserve resources","Forage on the enemy — their supplies become yours","Victory, not duration, is the object"],
    quote:"In war, then, let your great object be victory, not lengthy campaigns.",
    verses:[
      "When you engage in actual fighting, if victory is long in coming, then men's weapons will grow dull and their ardor will be damped.",
      "There is no instance of a country having benefited from prolonged warfare.",
      "The leader of armies is the arbiter of the people's fate."
    ]
  },
  {
    n:3, name:"Attack by Stratagem", tag:"Supreme excellence: winning without fighting",
    summary:"The highest form of generalship is to defeat the enemy through strategy — before a single blow is struck. Breaking resistance without fighting is supreme excellence. Sun Tzu outlines the famous maxim: know yourself and know your enemy, and victory is assured in a hundred battles.",
    keys:["Win without fighting — break resistance through strategy","Balk the enemy's plans rather than fighting their army","Know your enemy and know yourself","The general is the bulwark of the State"],
    quote:"Supreme excellence consists in breaking the enemy's resistance without fighting.",
    verses:[
      "In the practical art of war, the best thing of all is to take the enemy's country whole and intact; to shatter and destroy it is not so good.",
      "Hence to fight and conquer in all your battles is not supreme excellence; supreme excellence consists in breaking the enemy's resistance without fighting.",
      "If you know the enemy and know yourself, you need not fear the result of a hundred battles."
    ]
  },
  {
    n:4, name:"Tactical Dispositions", tag:"Securing victory before the battle begins",
    summary:"The skillful general first makes himself invincible and then awaits the enemy's vulnerability. Security against defeat lies in our own hands, but the opportunity to defeat the enemy is provided by the enemy. Victory is assured through preparation, not improvisation.",
    keys:["First put yourself beyond the possibility of defeat","Security against defeat lies in your own hands","The victorious general seeks battle after the victory has been won","Making no mistakes is what establishes the certainty of victory"],
    quote:"The victorious strategist only seeks battle after the victory has been won.",
    verses:[
      "The good fighters of old first put themselves beyond the possibility of defeat, and then waited for an opportunity of defeating the enemy.",
      "He wins his battles by making no mistakes. Making no mistakes is what establishes the certainty of victory, for it means conquering an enemy that is already defeated.",
      "The onrush of a conquering force is like the bursting of pent-up waters into a chasm a thousand fathoms deep."
    ]
  },
  {
    n:5, name:"Energy", tag:"The momentum of combined forces",
    summary:"Sun Tzu explains the interplay between direct and indirect forces. Like five musical notes creating infinite melodies, direct and indirect methods in combination create endless possibilities. Energy is like a bending crossbow; decision, the releasing of a trigger. Combined energy used well is unstoppable.",
    keys:["The direct and indirect methods combine to create endless strategies","Energy is the bending of a crossbow; decision is pulling the trigger","Simulated disorder requires perfect discipline","Use combined energy, not individual heroics"],
    quote:"Energy may be likened to the bending of a crossbow; decision, to the releasing of a trigger.",
    verses:[
      "In all fighting, the direct method may be used for joining battle, but indirect methods will be needed in order to secure victory.",
      "The onset of troops is like the rush of a torrent which will even roll stones along in its course.",
      "Thus the energy developed by good fighting men is as the momentum of a round stone rolled down a mountain thousands of feet in height."
    ]
  },
  {
    n:6, name:"Weak Points and Strong", tag:"Strike where the enemy is unprepared",
    summary:"Whoever is first in the field and awaits the coming enemy will be fresh for the fight; whoever arrives second will be exhausted. The wise combatant imposes his will on the enemy rather than allowing the enemy's will to be imposed on him. Strike weak points; avoid strong ones.",
    keys:["Be first in the field — dictate the pace","Strike the enemy's weak points, avoid the strong","Appear where the enemy must defend","Divide the enemy's forces; concentrate your own"],
    quote:"Military tactics are like unto water — avoid what is strong and strike at what is weak.",
    verses:[
      "Whoever is first in the field and awaits the coming of the enemy, will be fresh for the fight; whoever is second in the field and has to hasten to battle will arrive exhausted.",
      "You can be sure of succeeding in your attacks if you only attack places which are undefended.",
      "Do not repeat the tactics which have gained you one victory, but let your methods be regulated by the infinite variety of circumstances."
    ]
  },
  {
    n:7, name:"Maneuvering", tag:"The art of turning the devious into the direct",
    summary:"Tactical maneuvering is the most difficult art — turning the devious into the direct, and misfortune into gain. Speed is essential. Know the ground, know your alliances, use deception. Be swift as the wind, compact as the forest, aggressive as fire, immovable as a mountain.",
    keys:["Turn obstacles into advantages","Speed, deception, and knowledge of terrain","Be swift as wind, immovable as mountain","Attack morale and spirit, not just the body"],
    quote:"Let your rapidity be that of the wind, your compactness that of the forest.",
    verses:[
      "The difficulty of tactical maneuvering consists in turning the devious into the direct, and misfortune into gain.",
      "Let your plans be dark and impenetrable as night, and when you move, fall like a thunderbolt.",
      "A whole army may be robbed of its spirit; a commander-in-chief may be robbed of his presence of mind."
    ]
  },
  {
    n:8, name:"Variation in Tactics", tag:"The advantages that accompany variation",
    summary:"A general who understands variation in tactics knows how to handle troops. There are roads not to follow, armies not to attack, towns not to besiege. The wise blend advantages and disadvantages together. Five dangerous faults can ruin a general: recklessness, cowardice, a hasty temper, a delicate sense of honor, and over-solicitude for his men.",
    keys:["Know what not to do as well as what to do","Blend advantage and disadvantage in all plans","Five fatal faults destroy generals: recklessness, cowardice, temper, pride, sentimentality","Rely on your own readiness, not the enemy's failure to come"],
    quote:"The art of war teaches us to rely not on the likelihood of the enemy's not coming, but on our own readiness to receive him.",
    verses:[
      "The general who thoroughly understands the advantages that accompany variation of tactics knows how to handle his troops.",
      "There are five dangerous faults which may affect a general: recklessness, cowardice, a hasty temper, a delicacy of honor, and over-solicitude for his men.",
      "When an army is overthrown and its leader slain, the cause will surely be found among these five dangerous faults."
    ]
  },
  {
    n:9, name:"The Army on the March", tag:"Reading the signs of the enemy",
    summary:"Sun Tzu details how to position an army across different terrains — mountains, rivers, marshes, plains. He reveals how to read signs of the enemy: dust rising, birds taking flight, the behavior of soldiers. Leadership requires balancing humanity with iron discipline.",
    keys:["Choose high ground and sunny positions","Read signs of the enemy's movements and morale","Treat soldiers with humanity but control them with iron discipline","Observe carefully — everything is a signal"],
    quote:"Soldiers must be treated in the first instance with humanity, but kept under control by means of iron discipline.",
    verses:[
      "When the enemy is close at hand and remains quiet, he is relying on the natural strength of his position.",
      "He who exercises no forethought but makes light of his opponents is sure to be captured by them.",
      "If a general shows confidence in his men but always insists on his orders being obeyed, the gain will be mutual."
    ]
  },
  {
    n:10, name:"Terrain", tag:"The six kinds of ground",
    summary:"Sun Tzu distinguishes six kinds of terrain and six calamities that arise from generals' faults: flight, insubordination, collapse, ruin, disorganization, and rout. A great general knows when to fight against the sovereign's orders and when to obey. Regard your soldiers as children, and they will follow you into the deepest valleys.",
    keys:["Know your terrain — it determines your tactics","Six calamities all spring from the general's faults","Regard your soldiers as your children","Know the enemy and yourself for complete victory"],
    quote:"If you know the enemy and know yourself, your victory will not stand in doubt; if you know Heaven and know Earth, you may make your victory complete.",
    verses:[
      "The natural formation of the country is the soldier's best ally.",
      "Regard your soldiers as your children, and they will follow you into the deepest valleys; look upon them as your own beloved sons, and they will stand by you even unto death.",
      "If fighting is sure to result in victory, then you must fight, even though the ruler forbid it."
    ]
  },
  {
    n:11, name:"The Nine Situations", tag:"Nine varieties of ground and how to master them",
    summary:"Sun Tzu identifies nine varieties of ground — from dispersive ground (home territory) to desperate ground (where survival requires fighting). Each demands a different response. The master general adapts completely to circumstances, burns his boats behind him, and keeps his men in a situation where they fight with everything they have.",
    keys:["Nine varieties of ground require nine different strategies","On desperate ground, fight","Burn your boats — total commitment creates total effort","Rapidity is the essence of war"],
    quote:"Rapidity is the essence of war: take advantage of the enemy's unreadiness, make your way by unexpected routes, and attack unguarded spots.",
    verses:[
      "Throw your soldiers into positions whence there is no escape, and they will prefer death to flight.",
      "At the critical moment, the leader of an army acts like one who has climbed up a height and then kicks away the ladder behind him.",
      "At first, then, exhibit the coyness of a maiden, until the enemy gives you an opening; afterwards emulate the rapidity of a running hare."
    ]
  },
  {
    n:12, name:"The Attack by Fire", tag:"Five ways of attacking with fire",
    summary:"Sun Tzu describes five methods of fire attack and the conditions for using them. The lesson extends beyond warfare: never act from anger or emotion. Move only when there is advantage. A kingdom destroyed can never be restored; the dead cannot be brought back to life. Therefore, the enlightened ruler is heedful and the good general full of caution.",
    keys:["Use fire strategically — attack at favorable moments","Never act from anger or emotion","Move only when there is a genuine advantage","A kingdom once destroyed cannot be restored"],
    quote:"Move not unless you see an advantage; use not your troops unless there is something to be gained; fight not unless the position is critical.",
    verses:[
      "No ruler should put troops into the field merely to gratify his own spleen; no general should fight a battle simply out of pique.",
      "Anger may in time change to gladness; vexation may be succeeded by content. But a kingdom that has once been destroyed can never come again into being.",
      "Hence the enlightened ruler is heedful, and the good general full of caution."
    ]
  },
  {
    n:13, name:"The Use of Spies", tag:"Foreknowledge is the key to victory",
    summary:"The greatest general achieves results through foreknowledge — intelligence about the enemy's dispositions, plans, and conditions. This intelligence cannot come from spirits or deduction alone, but from men. Five classes of spies exist, and their coordination creates 'divine manipulation.' The converted spy — the enemy's spy turned to your service — is the most valuable of all.",
    keys:["Foreknowledge is the key to achieving extraordinary results","Five types of spies: local, inward, converted, doomed, surviving","The converted spy is the most valuable asset","Treat your spies with the utmost liberality"],
    quote:"What enables the wise sovereign and the good general to strike and conquer, and achieve things beyond the reach of ordinary men, is FOREKNOWLEDGE.",
    verses:[
      "Hostile armies may face each other for years, striving for the victory which is decided in a single day.",
      "Knowledge of the enemy's dispositions can only be obtained from other men.",
      "Hence it is only the enlightened ruler and the wise general who will use the highest intelligence of the army for purposes of spying and thereby they achieve great results."
    ]
  }
];

