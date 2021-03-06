var tarots = [
  ["I am engulfed, I succumb . . .", "s'abimer", "Outburst of annihilation which affects the amorous subject in despair or fulfillment"],
  ["The Absent One", "absence", "Any episode of language which stages the absence of the loved object-- whatever its cause and its duration -- and which tends to transform this absence into an ordeal of abandonment."],
  ["Adorable!", "adorable", "Not managing to name the specialty of their desire for the loved being, the amorous subject falls back on this rather stupid word: adorable!"],
  ["The Intractable", "affirmation", "Against and in spite of everything, the subject affirms love as value."],
  ["The Tip of the Nose", "altération", "Abrupt production, within the amorous field, of a counter-image of the loved object. According to minor incidents or tenuous features, the subject suddenly sees the good Image alter and capsize."],
  ["Agony", "angoisse", "The amorous subject, according to one contingency or another, feels swept away by the fear of a danger, an injury, an abandonment, a revulsion-- a sentiment they exprsses under the name of anxiety."],
  ["To Love Love", "annulation", "Explosions of language during which the subject manages to annul the loved object under the volume of love itself: by a specifically amorous perversion, it is love the subject loves, not the object."],
  ["to Be Ascetic", "askesis", "Whether they feels guilty with regard to the loved being, or whether they seeks to impress that being by representing their unhappiness, the amorous subject outlines an ascetic behavior of self-punishment (in life style, dress, etc.)."],
  ["Atopos", "atopos", "The loved being is recognized by the amorous subject as 'atopos' (a qualification given to Socrates by their interlocutors), i.e., unclassifiable, of a ceaselessly unforeseen originality."],
  ["Waiting", "attente", "Tumult of anxiety provoked by waiting for the loved being, subject to trivial delays (rendezvous, letters, telephone calls, returns)."],
  ["Dark Glasses", "cacher", "A deliberative figure : the amorous subject wonders, not whether they should declare their love to the loved being (this is not a figure of avowal), but to what degree they should conceal the turbulences of their passion: their desires, their distresses; in short, their excesses (in Racinian language : their fureur)"],
  ["Tutti Sistemati", "casés", "The amorous subject sees everyone around them as 'pigeonholed:' each appearing to be granted a little practical and affective system of contractual liaisons from which they feels themself to be excluded; this inspires them with an ambiguous sentiment of envy and mockery."],
  ["Catastrophe", "catastrophe", "Violent crisis during which the subject, experiencing the amorous situation as a definitive impasse, a trap from which they can never escape, sees themself doomed to total destruction."],
  ["Laetitia", "circonscrire", "To reduce their wretchedness, the subject pins their hope on a method of control which permits them to circumscribe the pleasures afforded by the amorous relation: on the one hand, to keep these pleasures, to take full advantage of them, and on the other hand, to place within a parenthesis of the unthinkable those broad depressive zones which separate such pleasures: 'to forget' the loved being outside of the pleasures that being bestows."],
  ["The Heart", "coeur", "This word refers to all kinds of movements and desires, but what is constant is that the heart is constituted into a gift-abject-whether ignored or rejected. "],
  ["'All the delights of the earth'", "comblement", "The subject insistently posits the desire and the possibility of a complete satisfaction of the desire implicated in the amorous relation and of a perfect and virtually eternal success of this relation: paradisiac image of the Sovereign Good, to be given and to be received. "],
  ["'I have an Other-ache'", "compassion", "The subject experiences a sentiment of violent compassion with regard to the loved object each time they sees, feels, or knows the loved object is unhappy or in danger, for whatever reason external to the amorous relation itself. "],
  ["'I want to understand'", "comprendre", "Suddenly perceiving the amorous episode as a knot of inexplicable reasons and impaired solutions, the subject exclaims: 'I want to understand (what is happening to me)!' "],
  ["'What is to be done?'", "conduite", "A deliberative figure: the amorous subject raises (generally) futile problems of behavior: faced with this or that alternative, what is to be done? How is they to act?"],
  ["Connivance", "connivence", "The subject imagines themself speaking about the loved being with a rival person, and this image generates and strangely develops in them a pleasure of complicity. "],
  ["'When my finger accidentally . . .'", "contacts", "The figure refers to any interior discourse provoked by a furtive contact with the body (and more precisely the skin) of the desired being. "],
  ["Events, Setbacks, Annoyances", "contingences", "Trivialities, incidents, setbacks, pettinesses, irritations, the vexations of amorous existence; any factual nucleus whose consequences intersect the amorous subject's will to happiness, as if chance conspired against them."],
  ["The Other's Body", "corps", "Any thought, :any feeling, any interest aroused in the amorous subject by the loved body,"],
  ["Talking", "déclaration", "The amorous subject's propensity to talk copiously, with repressed feeling, to the loved being, about their love for that being, for themself, for them: the declaration does not bear upon the avowal of love, but upon the endlessly glossed form of the amorous relation."],
  ["The Dedication", "dédicace", "An episode of language which accompanies any amorous gift, whether real or projected; and, more generally, every gesture, whether actual or interior, by which the subject dedicates something to the loved being."],
  ["'We are our own demons'", "démons", "It occasionally seems to the amorous subject that they is possessed by a demon of language which impels them to injure themself and to expel themself-according to Goethe's expression-from the paradise which at other moments the amorous relation constitutes for them."],
  ["Domnei", "dépendance", "A figure in which common opinion sees the very condition of the amorous subject, subjugated to the loved object. "],
  ["Exuberance", "dépense", "A figure by which the amorous subject both seeks and theysitates to place love in an economy of pure expenditure, of 'total loss.'"],
  ["The World Thunderstruck", "déréalité", "Sentiment of absence and withdrawal of reality experienced by the amorous subject. confronting the world."],
  ["Novel / Drama", "drame", "The amorous subject cannot write their love story themself. Only a very archaic form can accommodate the event which they declaims without being able to recount. "],
  ["Flayed", "écorché", "The particular sensibility of the amorous subject, which renders them vulnerable, defenseless to the slightest injuries."],
  ["Inexpressible Love", "écrire", "Enticements, arguments, and impasses generated by the desire to 'express' amorous feeling in a 'creation' (particularly of writing)."],
  ["The Ghost Ship", "errance", "Though each love is experienced as unique and though the subkcl rejects the notion of rcpeating it elsewhere [atcr on, they sometimes discovers in themself a kind of diffusion of amorous desire; they then realizes they is doomed to wander until they dies, from love to love"],
  ["'In the loving calm of your arms'", "étreinte", "The gesture of the amorous embrace seems to fulfill, for a time, the subject's dream of total union with the loved being. "],
  ["Exiled from the Image-repertoire", "exil", "Deciding to give up the amorous condition, the subject sadly discovers themself exiled from their Image-repertoire. "],
  ["The Orange", "fâcheux", "Scnlimenl of slight jealousy which overcomes the amorous subject when they sees the loved being's interest attracted or distracted by persons, objects, or occupations which in their eyes function as so many secondary rivals. "],
  ["Fade-out", "fading", "Painful ordeal in which the loved being appears to withdraw from all contact, without such enigmatic indifference even being directed against the amorous subject or pronounced to the advantage of anyone else, world or rival. "],
  ["At Fault", "fautes", "In various contingencies of everyday life, the subject imagines they has failed the loved being and thereby experiences a sentiment of guilt."],
  ["'Special Days'", "fête", "The amorous subject experiences every meeting with the loved being as a festival. "],
  ["'I am crazy'", "fou", "It frequently occurs to the amorous subject that they is or is going mad."],
  ["'Looking embarrassed'", "gêne", "A group scene in which the implicit nature of the amorous relation functions as a constraint and provokes a collective embarrassment which is not spoken."],
  ["Gradiva", "Gradiva", "This name, borrowed from Jensen's book analyzed by Freud, designates the image of the loved being insofar as that being agrees to enter to some degree into the amorous subject's delirium in order to help them escape from it."],
  ["Blue Coat and Yellow Vest", "habit", "Any affect provoked or sustained by the clothing which the subject has worn during the amorous encounter, or wears with the intention of seducing the loved object."],
  ["Identifications", "identification", "The subject painfully identifies themself with some person (or character) who occupies the same position as themself in the amorous structure."],
  ["Images", "image", "In the amorous realm, the most painful wounds are inflicted more often by what one sees than by what one knows"],
  ["The Unknowable", "inconnaissable", "Efforts of the amorous subject to understand and define the loved being 'in itself,' by some standard of character type, psychological or neurotic personality, independent of the particular data of the amorous relation. "],
  ["'Show me whom to desire'", "induction", "The loved being is desired because another or others have shown the subject that such a being is desirable : however particular, amorous desire is discovered by induction."],
  ["The Informer", "informateur", "A friendly figure whose constant role, however, seems to be to wound the amorous subject by 'innocently' furnishing commonplace information about the loved being, though the effect of this information is to disturb the subject's image of that being."],
  ["This can't go on", "insupportable", "The sentiment of an accumulation of amorous sufferings explodes in this cry : 'This can't go on . . .'"],
  ["Ideas of Solution", "issues", "Enticement of solutions, whatever they may be, which afford the amorous subject, despite their frequently catastrophic character, a temporary peace; hallucinatory manipulation of the possible outcomes of the amorous crisis. "],
  ["Jealousy", "jalousie", "A sentiment which is born in love and which is produced by the fear that the loved person prefers someone else' (Littre)."],
  ["I Love You", "je-t'-aime", "The figure refers not to the declaration of love, to the avowal, but to the repeated utterance of the love cry."],
  ["Love's Languor", "langueur", "Subtle state of amorous desire, experienced in its dearth, outside of any will-to-possess."],
  ["The Love Letter", "lettre", "This figure refers to the special dialectic of the love letter, both blank (encoded) and expressive (charged with longing to signify desire)."],
  ["The Loquela", "loquela", "This word, borrowed from Ignatius of Loyola, designates the flux of language through which the subject tirelessly rehashes the effects of a wound or the consequences of an action: an emphatic form of the lover's discourse."],
  ["The Last Leaf", "magie", "Magic consultations, secret rites, and votive actions are not absent from the amorous subject's life, whatever culture they belongs to."],
  ["'I am odious'", "monstreux", "The subject suddenly realizes that they is imprisoning the loved object in a net of tyrannies: they has been pitiable, now they becomes monstrous."],
  ["No Answer", "mutisme", "The amorous subject suffers anxiety because the loved object replies scantily or not at all to their language (discourse or letters) ."],
  ["Clouds", "nuages", "Meaning and employment of that darkening of mood which overtakes the subject under various circumstances."],
  ["'And the night illuminated the night'", "nuit", "Any state which provokes in the subject the metaphor of the darkness, whether affective, intellective, or existential, in which they struggles or subsides."],
  ["The Ribbon", "objets", "Every object touched by the loved being's body becomes part of that body, and the subject eagerly attaches themself to it."],
  ["Love's Obscenity", "obscène", "Discredited by modern opinion, love's sentimentality must be assumed by the amorous subject as a powerful transgression which leaves them alone and exposed; by a reversal of values, then, it is this sentimentality which today constitutes love's obscenity."],
  ["In Praise of Tears", "pleurer", "The amorous subject has a particular propensity to cry: the functioning and appearance of tears in this subject."],
  ["Gossip", "potin", "Pain suffered by the amorous subject when they finds that the loved being is the subject of 'gossip' and hears that being discussed promiscuosly."],
  ["Why?", "pourquoi", "Even as they obsessively asks themself why they is not loved, the amorous subject lives in the belief that the loved object does love them but does not tell them so."],
  ["Ravishment", "ravissement", "The supposedly initial episode (though it may be reconstructed after the fact) during which the amorous subject is 'ravished' (captured and enchanted) by the image of the loved object (popular name : love at first sight; scholarly name: enamoration)"],
  ["Regretted?", "regretté", "Imagining themself dead, the amorous subject sees the loved being's life continue as if nothing had happened."],
  ["'How blue the sky was'", "rencontre", "The figure refers to the happy interval immediately following the first ravishment, before the difficulties of the amorous relationship begin."],
  ["Reverberation", "retentissement", "Fundamental mode of amorous subjectivity: a word, an image reverberates painfully in the subject's affective consciousness."],
  ["Aubade", "réveil", "Various modes by which the amorous subject finds upon waking that they is once again besieged by the anxieties of their passion."],
  ["Making Scenes", "scéne", "The figure comprehends every 'scene' (in the household sense of the term) as an exchange of reciprocal contestations."],
  ["'No clergyman attended'", "seul", "The figure refers, not to what the human solitude of the amorous subject may be, but to their 'philosophical' solitude, love-as-passion being accounted for today by no major system of thought (of discourse) ."],
  ["The Uncertainty of Signs", "signes", "Whether they seeks to prove their love, or to discover if the other loves them, the amorous subject has no system of sure signs at their disposal."],
  ["E lucevan le stelle", "souvenir", "Happy and/ or tormenting remembrance of an object, a gesture, a scene, linked to the loved being and marked by the intrusion of the imperfect tense into the grammar of the lover's discourse."],
  ["Ideas of Suicide", "suicide", "In the amorous realm, the desire for suicide is frequent: a trifle provokes it."],
  ["Thus", "tel", "Endlessly required to define the loved object, and suffering from the uncertainties of this definition, the amorous subject dreams of a knowledge which would let them take the other as they is, thus and no other, exonerated from any adjective."],
  ["Tenderness", "tendresse", "Bliss, but also a disturbing evaluation of the loved object's tender gestures, insofar as the subject realizes that they is not their privileged recipient."],
  ["Union", "union", "Dream of total union with the loved being."],
  ["Truth", "vérité", "Every episode of language refers to the 'sensation of truth' the amorous subject experiences in thinking of their love, either because they believes they is the only one to see the loved object 'in its truth,' or because they defines the specialty of their own requirement as a truth concerning which they cannot yield."],
  ["Sobria Ebrietas", "vouloir-saisir", "Realizing that the difficulties of the amorous relationship originate in their ceaseless desire to appropriate the loved being in one way or another, the subject decides to abandon henceforth all 'will-to-possess' in their regard."]
]

var randomItem = tarots[Math.random() * tarots.length | 0];

function fadeAlong(el) {
  el.style.opacity = 0
  el.style.display = ''
  if (el.classList) {
    el.classList.add('FadeUpContent')
  } else {
    el.className += ' ' + 'FadeUpContent'
  }
  var last = +new Date();
  var tick = function() {
    el.style.opacity = +el.style.opacity + (new Date() - last) / 400;
    last = +new Date();
    if (+el.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
    }
  };
  tick();
}

function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

document.getElementById('button').addEventListener('click', function() {
  document.getElementById('button').style.display = 'none';
  document.getElementById('intro').style.display = 'none';
  fadeAlong(document.getElementById('displayCanvas'));
  document.getElementById('displayCanvas').style.display = '';
  fadeAlong(document.getElementById('caption'));
  document.getElementById('caption_title').innerHTML += randomItem[0];
  document.getElementById('caption_def').innerHTML += (randomItem[1] + ": <br/>" +randomItem[2]);
});
