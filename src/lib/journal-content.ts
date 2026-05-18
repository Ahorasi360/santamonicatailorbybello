// Full journal post bodies. Each post is 800-1200 words of practical,
// opinionated, expert-voice content — not generic SEO filler.
// Centralized here so all 6 posts can be edited in one place.

export type JournalPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  datePublished: string;  // ISO format for schema
  image: string;
  description: string;    // For metadata
  body: string;           // HTML body content
};

export const JOURNAL_POSTS: Record<string, JournalPost> = {
  'how-a-suit-should-fit': {
    slug: 'how-a-suit-should-fit',
    title: 'How a Suit Should Fit: The Complete Guide',
    category: 'Fit Guide',
    date: 'March 15, 2024',
    datePublished: '2024-03-15',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663296530547/HiNwGCzzPXbrMcuD99ygxU/bello-custom-suits-new-3KsFwfc6jLqgK9QyGawHAT.webp',
    description: 'The definitive guide to suit fit — shoulders, chest, waist, sleeves, trousers, collar, and the alterations that fix each. By master tailor Javier Bello.',
    body: `
<p>After more than twenty years of tailoring on the Westside, I can tell you the single most common mistake people make when buying a suit: they look at the price tag, the fabric, and the brand, and they ignore the shoulders. Everything else — chest, waist, sleeves, trousers — can be altered. The shoulders cannot, not really. So we start there.</p>

<h2>The Shoulders: Where Fit Begins and Ends</h2>
<p>The shoulder seam should sit precisely at the edge of your shoulder bone, where the natural curve of your shoulder rolls down toward your arm. If you can feel the seam pulling toward your neck, the jacket is too small. If the seam sits below the edge of your shoulder onto your bicep, the jacket is too big — and no tailor can fix it without effectively rebuilding the jacket from scratch.</p>
<p>Why is the shoulder almost impossible to alter? Because the shoulder pad, the canvas, the sleeve attachment, and the collar are all engineered around that one measurement. To change it, all four elements have to be detached, reshaped, and reassembled. On a $500 suit it makes no economic sense. On a $5,000 suit it can be done but costs $300-500 and requires real expertise.</p>
<p>The practical lesson: when you try on a suit, button it, walk around, raise your arms. If the shoulders feel right, you can work with the rest. If they don't, put it back and try the next size — no matter how beautiful the fabric.</p>

<h2>The Chest: Room to Move, Not to Swim</h2>
<p>When the jacket is buttoned and you're standing relaxed, the lapels should lay flat against the chest with no pulling or gaping at the button. The classic test: slip a flat hand inside the jacket between the lapel and your shirt. You should be able to fit your hand in flat. If you can fit a fist, the jacket is too loose. If you can't fit a hand at all, it's too tight.</p>
<p>An X-shaped pull radiating from the button is the universal sign of a chest that's too small. This can sometimes be let out an inch or so depending on seam allowances, but a jacket pulling badly is usually a sign you've simply bought the wrong size.</p>

<h2>The Waist: Suppression and Shape</h2>
<p>A well-fitted jacket shows a gentle narrowing at the waist — what tailors call suppression. This is the difference between looking athletic and looking like you borrowed your father's suit. Most ready-to-wear suits are cut conservatively at the waist (manufacturers don't know what your actual waist looks like) and most clients benefit from one to two inches of suppression added at the side seams.</p>
<p>Waist suppression is one of the highest-value alterations in tailoring. It typically costs $80-140 and transforms how a suit looks more than almost anything else. If you take only one alteration on a new suit, take this one.</p>

<h2>The Collar and Lapels: The Most-Missed Detail</h2>
<p>The jacket collar should sit flush against the back of your shirt collar with no gap, no roll, and no pull. If you can see daylight between the jacket collar and the shirt — what we call a collar gap — the jacket is reading as too big through the upper back, or the shoulders are sitting wrong, or both. This is one of the most common fit problems and it's also one of the hardest to fix because it usually requires reshaping the upper back panel and rebalancing the entire jacket.</p>
<p>The lapels should roll smoothly from the collar down to the button, not lay flat like cardboard and not bubble or wave. A properly canvassed jacket (one with horsehair canvas sewn into the chest, not glued) will roll naturally. A fused jacket — the cheap construction used in most under-$800 suits — often bubbles or separates over time, especially after dry cleaning.</p>

<h2>The Sleeves: Length, Pitch, and the Forward Slant</h2>
<p>Jacket sleeves should end approximately half an inch above your shirt cuff, allowing the shirt cuff to show. Half an inch is the classic measurement; modern slim-cut suits often show three-quarters of an inch. What matters is that some shirt cuff shows. If none does, the jacket sleeves are too long. If you're showing two inches of cuff, they're far too short.</p>
<p>Sleeve pitch — the forward or backward slant of the sleeve as it hangs from your shoulder — is a more subtle issue but matters greatly for comfort and appearance. If you stand naturally and your sleeves twist or pucker behind the elbow, the pitch is wrong. This can usually be corrected by a tailor who reattaches the sleeve at the shoulder, though it adds $80-150 to a basic length alteration.</p>
<p>One technical note: on a high-end suit with working buttonholes (surgeon's cuffs), sleeve length should be altered from the shoulder, not the cuff, to preserve the buttonholes. This costs $125-185 instead of $45-75 but the difference in appearance is significant.</p>

<h2>The Trousers: Break, Rise, and the Seat</h2>
<p>Trouser fit is more variable than jacket fit because more of it is personal preference. The break — how the trouser hem sits on the shoe — ranges from full break (traditional, formal, fabric bunches at the shoe) through half break (versatile, slight crease at the front) to no break (modern, hem just touches the shoe). None is wrong. Pick the one that fits your style and stick with it.</p>
<p>The rise — how high the waistband sits — matters more than people think. A low-rise trouser on a tall man looks like board shorts under a jacket. A high-rise trouser on a short man looks like he's wearing a costume. The right rise sits at or just below your natural waist (above your hip bones, below your navel).</p>
<p>The seat should fit smoothly with no horizontal pulling and no excess pooling of fabric. If you see pulling marks radiating from the back pockets, the seat is too tight. If there's a hammock of loose fabric under the seat, it's too loose. Both are usually correctable at the side seams for $55-95.</p>

<h2>What to Tell Your Tailor</h2>
<p>When you bring a suit in for alteration, three things make the process work: bring the shoes you'll actually wear with the suit (trouser break is meaningless without the right shoes), bring the shirt and tie you'll wear (jacket fit changes with what's underneath), and stand naturally during the fitting. Don't suck in your stomach, don't square your shoulders. The tailor needs to see how you actually stand or the fit will be wrong in real life.</p>
<p>And tell the truth about how you'll wear the suit. A suit altered for a wedding day, where you stand for photos in a relaxed posture, is altered differently than one for daily commute and conference rooms. The tailor needs to know.</p>

<h2>The Honest Limits of Alteration</h2>
<p>Most fit problems can be fixed. Some cannot. Worth knowing the difference before you buy: shoulders too wide can be reduced slightly but rarely without compromise. Jacket length, beyond an inch or two, requires reshaping the front quarters and is expensive. Trousers can be let out only by as much seam allowance the maker left — fast-fashion suits often have almost none, while traditional Italian and English suits have generous allowances. When in doubt, bring the piece in for an honest assessment before you commit to it.</p>
`,
  },

  'bespoke-vs-made-to-measure': {
    slug: 'bespoke-vs-made-to-measure',
    title: 'Bespoke vs Made-to-Measure: What is the Difference?',
    category: 'Education',
    date: 'February 10, 2024',
    datePublished: '2024-02-10',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663296530547/HiNwGCzzPXbrMcuD99ygxU/bello-alterations-new-mc4PxTfLgVaYSLUXguwEEu.webp',
    description: 'The real differences between off-the-rack, made-to-measure, and bespoke tailoring — what each costs, when each makes sense, and which is right for you.',
    body: `
<p>The terms "bespoke," "made-to-measure," and "custom" get thrown around interchangeably in marketing, and the result is that most clients walk into our studio confused about what they're actually buying. The differences are substantial — in price, in fit, in lead time, and in the relationship between you and the tailor. Worth understanding before you commit.</p>

<h2>Off-the-Rack: The Starting Point</h2>
<p>Off-the-rack suits are manufactured in standard sizes (38R, 40L, 42R) based on industry-average measurements. The maker assumes your chest, your waist drop from chest, your shoulder width, your arm length, and your trouser inseam all fall into a single statistical bucket. For maybe 30 percent of men, this is roughly true. For the other 70 percent, an off-the-rack suit needs significant alteration to fit properly.</p>
<p>The price range varies enormously — from $200 fast-fashion suits to $5,000+ luxury house ready-to-wear (Brioni, Zegna, Kiton, Tom Ford). What you're paying for above $1,500 is generally fabric quality, construction method (canvassed vs fused), and brand. The actual fit is still off-the-rack: standard sizes adjusted for the maker's house silhouette.</p>
<p>The advantage of off-the-rack is speed and immediacy. You can walk into a store, try on twenty suits, and walk out with one that day. The disadvantage is that "fits perfectly off the rack" is largely a myth — even excellent off-the-rack suits typically need $150-400 of alterations to look their best.</p>

<h2>Made-to-Measure: A Better Starting Point</h2>
<p>Made-to-measure (MTM) takes a stock pattern from the maker's library and adjusts it to your specific measurements. The maker has perhaps 50-100 base patterns covering different body types and proportions, and they select the closest one to yours, then modify it for your individual measurements: chest, waist, hip, shoulder, sleeve length, trouser inseam, and so on.</p>
<p>What you get is a suit cut for your dimensions — not a generic size adjusted afterward. The fit is meaningfully better than off-the-rack, particularly for clients whose proportions deviate from average (broader shoulders, longer arms, larger drops between chest and waist). What you don't get is a pattern unique to your body. The base pattern is shared with hundreds of other clients.</p>
<p>Made-to-measure typically costs $1,500-4,500 depending on fabric and maker, and lead time is usually six to ten weeks. It's an excellent option for clients who want a substantially better fit than off-the-rack without committing to the time and cost of full bespoke. Most clients who don't have unusual proportions are best served at this tier.</p>

<h2>Bespoke: The Gold Standard</h2>
<p>Bespoke means a pattern is created from scratch for your body. The tailor takes 20-30 measurements, observes how you stand, notes asymmetries (most people have one shoulder slightly higher than the other, one hip higher than the other), and drafts a unique paper pattern that exists nowhere else in the world. The suit is cut from that pattern, basted together with white stitching, fitted on you, adjusted, and refitted before final construction.</p>
<p>The hallmarks of true bespoke: a baste fitting (where the suit is held together with removable stitching before being properly sewn), multiple fittings, a pattern that's kept on file for future commissions, and construction details that are difficult or impossible to find at lower tiers — full hand pad-stitching of lapels, hand-sewn buttonholes in silk twist, hand-finished linings.</p>
<p>Bespoke pricing varies widely. Our work at Santa Monica Tailor by Bello starts at approximately $3,500 for a two-piece in standard fabrics; most clients spend $4,500-7,500 depending on fabric mill and detailing. Savile Row London bespoke starts around £4,500 ($5,700) and runs to £15,000+ for top houses. Roman bespoke (Brioni, Kiton) is similar. Lead time for bespoke is typically eight to twelve weeks, sometimes longer for very high-end commissions.</p>

<h2>The Construction Differences That Matter</h2>
<p>Beyond pattern type, the three tiers differ in construction. Most off-the-rack suits below $1,200 are fused — the canvas in the chest is glued to the wool with adhesive rather than sewn. Fused construction is faster and cheaper but tends to bubble or separate over time, particularly with humidity or repeated dry cleaning. It also feels lifeless because the chest is rigid rather than draping naturally.</p>
<p>Half-canvas construction (typical of $1,200-2,500 ready-to-wear and most made-to-measure) uses canvas in the upper chest but fuses the rest. It's a middle ground.</p>
<p>Full-canvas construction (every bespoke suit, plus high-end ready-to-wear like Brioni, Zegna Couture, Loro Piana, Kiton) has a floating canvas layer sewn into the entire front of the jacket. It moves with you, drapes naturally, and lasts decades rather than years. The first time you wear a fully canvassed jacket after only wearing fused, you'll notice the difference immediately — it feels alive.</p>

<h2>Which Is Right for You?</h2>
<p>For most men with relatively standard proportions: excellent off-the-rack with expert alterations delivers 85 percent of the fit of bespoke at 20 percent of the price. Spend the difference on better shoes and a real overcoat.</p>
<p>For men with non-standard proportions — significantly broader or narrower shoulders than the chest-waist drop suggests, longer or shorter than average arms, athletic builds with large chest-to-waist drops, asymmetric shoulders — made-to-measure is usually the sweet spot. The fit improvement over off-the-rack is dramatic; the cost is reasonable; the lead time is manageable.</p>
<p>For men with truly unusual proportions, or who simply want the experience of working with a master tailor on a garment unique to them, bespoke is unmatched. The first bespoke suit is often a revelation — clients describe it as wearing a suit for the first time after years of wearing approximations.</p>
<p>One final thought: bespoke is also a relationship, not just a transaction. The pattern stays on file. The tailor remembers your body. Future commissions are faster and easier. For clients who plan to own several suits over many years, the bespoke relationship compounds in value.</p>
`,
  },

  'suit-alterations-guide': {
    slug: 'suit-alterations-guide',
    title: 'The Essential Guide to Suit Alterations',
    category: 'Alterations',
    date: 'January 20, 2024',
    datePublished: '2024-01-20',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663296530547/HiNwGCzzPXbrMcuD99ygxU/bello-portfolio-1-new-LDifmq4hwGPCCWMpwrNrUu.webp',
    description: 'Which suit alterations are worth doing, which require caution, and what every client should know before bringing a suit to a tailor.',
    body: `
<p>Most off-the-rack suits need alterations. Even excellent ones. The question is not whether to alter, but what to alter, in what order, and to what degree. This guide covers what's worth doing, what to approach with caution, and what's usually a waste of money.</p>

<h2>Alterations Worth Doing on Almost Every Suit</h2>
<p>Three alterations transform almost any suit and are nearly always worth the cost. <strong>Trouser hemming</strong> is the most fundamental — trousers should sit on your actual shoes with the break you prefer, not at whatever length the maker happened to choose. Cost: $25-45. Time: 7-10 business days standard, often available same-day. There's no good reason to ever wear unhemmed or improperly hemmed trousers.</p>
<p><strong>Waist suppression</strong> on the jacket is the highest-value alteration in tailoring. A subtle narrowing at the waist — typically one to two inches of suppression at the side seams — transforms how a suit looks more than almost anything else. Most ready-to-wear is cut conservatively at the waist and benefits significantly from this work. Cost: $80-140.</p>
<p><strong>Sleeve length</strong> matters more than most clients realize. Jacket sleeves should end half an inch above the shirt cuff. If yours don't, fix it. From the cuff (for standard suits) costs $45-75; from the shoulder (for high-end suits with working buttonholes) costs $125-185.</p>

<h2>Alterations Worth Doing on Most Suits</h2>
<p><strong>Trouser tapering</strong> — narrowing the trouser from the knee down to the ankle — is often worth doing on modern suits where the trouser is cut wider than current proportions favor. Cost: $55-95. Be careful not to taper too aggressively; the trouser should still have enough room to break properly over the shoe.</p>
<p><strong>Jacket length adjustment</strong> is worth doing when the suit is meaningfully off — typically when the jacket is too long, hiding the seat (a sign of older or larger sizing). Shortening more than an inch and a half affects the visual proportions of the jacket and front quarters and should be done by a tailor who understands the consequences. Cost: $145-225.</p>
<p><strong>Collar adjustment</strong> on the jacket — fixing a collar gap (where the jacket collar doesn't sit flush against the shirt collar) — is one of the more complex alterations but often essential for a polished look. It requires reshaping the upper back and rebalancing the jacket. Cost: $185-285.</p>

<h2>Alterations to Approach with Caution</h2>
<p><strong>Shoulder adjustments</strong> are technically possible but rarely worth the cost. The shoulder is the structural foundation of the jacket — pad, canvas, sleeve attachment, and collar all reference the shoulder. Adjusting it requires disassembling and rebuilding all four. On a $500 suit, it makes no sense. On a $5,000 suit, an expert can do it but charges $300-500. Better path: don't buy a suit with the wrong shoulder fit.</p>
<p><strong>Letting out</strong> a suit is limited by the seam allowance the maker left. Traditional Italian and English bespoke suits have generous seam allowances and can be let out an inch or more. Fast-fashion suits often have almost no seam allowance and can be let out maybe a quarter inch before the seams run out. Before buying a suit, look inside at the seams to see what's available.</p>
<p><strong>Major resizing</strong> — taking a 44R down to a 42R, for example — is achievable but requires careful work on every panel of the jacket and trouser. Cost: $250-450 depending on construction. Usually worth doing only on high-end suits or those with sentimental value.</p>

<h2>Alterations Usually Not Worth Doing</h2>
<p><strong>Rebuilding a lining</strong> in an inexpensive suit doesn't make economic sense — the cost of the work approaches the cost of the suit. On a luxury suit it's worthwhile. On a $400 suit, replace the suit.</p>
<p><strong>Repairing a damaged shoulder</strong> on a suit that doesn't otherwise warrant the investment — better to retire the suit than to spend $400 on a shoulder repair on a $600 suit.</p>
<p><strong>Aggressive tapering</strong> to chase a trend that may change in eighteen months — alterations should follow your body, not your Instagram feed. Subtle adjustments age well; extreme ones look dated quickly.</p>

<h2>What to Tell Your Tailor</h2>
<p>Bring the shoes you'll actually wear with the suit. Trouser break is meaningless without the right shoes; jacket length references the shoe height. Bring the shirt and tie you'll wear — jacket fit changes with what's underneath. Stand naturally during the fitting — don't suck in your stomach, don't square your shoulders. The tailor needs to see how you actually stand.</p>
<p>Explain how you'll wear the suit. Conference rooms and weddings ask different things. A suit altered for daily wear has different priorities (mobility, durability) than one altered for a single event (visual perfection in photos).</p>
<p>Ask before you commit to anything. A good tailor will tell you honestly what's worth doing, what isn't, and what the trade-offs are. If the tailor recommends $800 of alterations on a $500 suit, find a different tailor.</p>

<h2>The Cost of Alterations</h2>
<p>For a typical off-the-rack suit needing standard alterations, expect $200-450 in tailoring on top of the suit's purchase price. For high-end suits requiring shoulder-based sleeve work, working-buttonhole preservation, or complex resizing, $400-800 is realistic. Plan for it. A $1,500 suit altered to fit properly is significantly better-looking than a $2,500 suit altered poorly or not at all.</p>
<p>Standard turnaround for most alterations is seven to ten business days. Rush service (24-48 hours) is available for an additional fee. Plan ahead for events; bring the suit in at least three weeks before the date.</p>
`,
  },

  'fabric-guide-wool-seasons': {
    slug: 'fabric-guide-wool-seasons',
    title: 'Fabric Guide: Choosing the Right Wool for Every Season',
    category: 'Fabrics',
    date: 'December 5, 2023',
    datePublished: '2023-12-05',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663296530547/HiNwGCzzPXbrMcuD99ygxU/bello-portfolio-3-new-KgqRQNqsNDPBPJV934SxTg.webp',
    description: 'A practical fabric guide for Los Angeles climate — wool weights, super numbers, top mills, and which fabrics work for which seasons and occasions.',
    body: `
<p>The single biggest mistake I see in Los Angeles is clients buying suits built for New York. Heavy worsted wool, year-round 11oz fabric, suits intended for actual winter. They wear them twice and complain that suits are uncomfortable. They aren't — the wrong fabric is. This guide covers what to actually buy for our climate.</p>

<h2>Understanding Fabric Weight</h2>
<p>Wool fabric weight is measured in ounces per linear yard (or grams in metric markets). The number describes how heavy the woven fabric is. Lighter fabrics drape more fluidly and breathe better in warm weather. Heavier fabrics hold their shape better, hide imperfections more readily, and provide more warmth.</p>
<p>The practical ranges for Los Angeles: <strong>7-8 oz</strong> is true tropical weight, intended for the hottest months and summer travel — light enough that the jacket can pool slightly when seated. <strong>9-10 oz</strong> is the year-round weight for our climate — heavy enough to drape properly, light enough to wear most days. <strong>11-12 oz</strong> is winter weight in LA, fall-to-spring weight elsewhere. <strong>13+ oz</strong> is genuine cold-weather fabric, mostly inappropriate for our region except for occasional travel.</p>
<p>If you can own only one suit weight in LA, make it 9-10 oz. You'll wear it ten months a year.</p>

<h2>Super Numbers: What They Mean</h2>
<p>The "Super 100s," "Super 130s," "Super 180s" labels you see on fabric refer to the fineness of the wool fiber, measured in microns. Super 100s wool has fibers around 18.5 microns; Super 180s is around 14 microns. Finer fibers feel softer to the hand and produce more luxurious fabrics.</p>
<p>Here's the catch most marketing doesn't mention: finer wool is more delicate. A Super 180s suit feels extraordinary against the skin but wrinkles easily, doesn't hold its shape as well, and wears out faster than a Super 100s. For daily-wear suits, Super 100s to Super 130s is the sweet spot — soft enough to feel premium, durable enough to wear regularly. Save the Super 180s and Super 200s for occasion-wear suits you'll bring out for special events.</p>
<p>One nuance: Super numbers measure fiber fineness only. They don't measure weave quality, finish, or construction. A poorly-made Super 180s suit is worse than an excellent Super 100s suit.</p>

<h2>Tropical Wools: The Los Angeles Choice</h2>
<p>Tropical wool is woven with an open structure that allows air to pass through, dramatically improving breathability. The trade-off is that the more open weave shows wrinkles more readily and may be slightly less crisp-looking than a tightly woven worsted.</p>
<p>For LA in summer, particularly for clients commuting in cars without aggressive air conditioning, or attending outdoor events, tropical wool is correct. Look for fabrics labeled "tropical," "high-twist," "fresco," or "Cool Wool" (a Zegna designation). The weights typically run 7-9 oz.</p>
<p>A note on fresco: this is a specific tropical wool with a slightly textured surface. Outstanding for travel because it resists wrinkles better than most other tropical weaves. If you're a client who flies frequently for business, fresco trousers and a fresco suit jacket are an excellent investment.</p>

<h2>Year-Round Wools</h2>
<p>Standard worsted wool in 9-10 oz weight is the workhorse fabric for LA. It drapes well, holds its shape, takes alteration well, and works in temperatures from 60°F to 80°F — which covers most of our year. Look for fabrics from mills like Loro Piana, Cerruti, Dormeuil, Holland and Sherry, and Scabal in this weight.</p>
<p>For business suits worn primarily in conditioned interiors, 10 oz is the right call. For suits that will see outdoor wear in summer (weddings, garden parties), 9 oz is more comfortable.</p>

<h2>Heavier Fabrics: When They Make Sense</h2>
<p>Flannel — a brushed wool with a soft hand — is the classic winter fabric. Beautiful, drapes magnificently, holds shape well, but heavy enough that you'll only want to wear it from December through February in LA. If you travel to colder climates in winter (New York, London, Aspen), a flannel suit is worth owning. If you don't, skip it.</p>
<p>Tweed and tweed-adjacent fabrics (donegal, harris tweed) are excellent for sport coats and unstructured jackets worn casually. Less suitable for full suits in LA — too warm, too country-house. Tweed sport coats over a casual shirt and trousers are a different story and work well most of the year here.</p>

<h2>Top Mills Worth Knowing</h2>
<p><strong>Loro Piana</strong> — Italian, exceptional super-high counts, soft hands. Excellent for occasion-wear and second suits. Pricey: $200-400+ per meter wholesale.</p>
<p><strong>Cerruti</strong> — Italian, more accessible price point with excellent quality. A workhorse mill for daily-wear suits. $100-180 per meter wholesale.</p>
<p><strong>Dormeuil</strong> — French heritage mill, beautiful classic patterns and weights. Particularly strong on traditional worsteds and seasonal weights. $150-300 per meter wholesale.</p>
<p><strong>Holland and Sherry</strong> — English mill, exceptional quality across the range. Their Royal Classic line is a standard for high-end bespoke. $200-400 per meter wholesale.</p>
<p><strong>Scabal</strong> — Belgian, known for special editions and unusual weaves. Excellent for clients who want something more distinctive than a standard solid. $200-450 per meter wholesale.</p>

<h2>Practical Recommendations</h2>
<p>For your first quality suit in LA: 10 oz worsted wool in solid navy or charcoal from a mid-tier mill like Cerruti. Works for almost any occasion, drapes beautifully, lasts years. Budget the fabric at $80-150 per meter for a custom or made-to-measure commission.</p>
<p>For your second suit: 9 oz tropical or high-twist worsted in mid-grey or a subtle pattern. Adds variety and a summer-friendly option.</p>
<p>For occasion wear: a Super 150s in a sharper black or midnight blue from Loro Piana or Holland and Sherry. Save it for when it matters.</p>
<p>What not to do: don't buy a heavy flannel for daily wear in LA, don't buy a Super 200s for a suit you'll wear weekly, don't buy fabric without considering the climate where you'll actually wear it.</p>
`,
  },

  'wedding-suit-timeline': {
    slug: 'wedding-suit-timeline',
    title: 'The Wedding Suit Timeline: When to Start and What to Expect',
    category: 'Wedding',
    date: 'November 12, 2023',
    datePublished: '2023-11-12',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663296530547/HiNwGCzzPXbrMcuD99ygxU/bello-wedding-new-PNcS2PsTMDqPHXCwBLpVrM.webp',
    description: 'A practical wedding suit timeline — bespoke (4-6 months), made-to-measure (2-3 months), or alterations (6-8 weeks) — and what to bring to each fitting.',
    body: `
<p>The biggest source of wedding-day suit problems is starting too late. Six weeks before the wedding is too late for bespoke. Three weeks is too late for any serious alterations. This guide covers what to start when, what to bring to fittings, and how to avoid the most common wedding tailoring mistakes.</p>

<h2>Bespoke Wedding Suit: Start 4-6 Months Out</h2>
<p>A fully bespoke wedding suit needs four to six months from initial consultation to final fitting, with some breathing room before the wedding day. Here's the realistic timeline:</p>
<p>Months six and five: consultation, fabric selection, measurements, pattern drafting. The consultation is typically an hour. Fabric selection can take longer — wedding-grade fabrics from Loro Piana, Dormeuil, or Holland and Sherry have lead times of their own, and unusual orders may require waiting four to six weeks for delivery.</p>
<p>Months four and three: first fitting (baste fit — the suit held together with white stitching that can be adjusted at every seam). At this point we see the pattern on your body and identify the adjustments needed. After the first fitting, the suit is rebuilt with the changes.</p>
<p>Months two and one: second fitting (more refined; closer to the final construction), then a third if needed. Most clients are completed in two fittings; complex builds or unusual fits sometimes need three.</p>
<p>Two weeks before the wedding: final adjustment fitting. This is the buffer week where any weight changes from pre-wedding fitness routines get addressed. We strongly recommend not scheduling the last fitting closer than two weeks out — last-minute alterations leave no room for error.</p>

<h2>Made-to-Measure: Start 2-3 Months Out</h2>
<p>Made-to-measure compresses the timeline because the pattern is adapted from a stock library rather than drafted from scratch. Realistic timeline: ten to twelve weeks from order to final delivery, with two fittings typically built in.</p>
<p>Week one: consultation, fabric selection, measurements, order submitted to the maker. Weeks two through six: production. Weeks seven through nine: first fitting and any adjustments. Weeks ten through twelve: final fitting and delivery.</p>
<p>If you're starting later than three months out and need a suit specifically for the wedding, made-to-measure is often the right path — faster than bespoke, better fit than off-the-rack.</p>

<h2>Off-the-Rack with Alterations: Start 6-8 Weeks Out</h2>
<p>Buying a high-quality off-the-rack suit and having it altered is the fastest path to a great wedding fit. The realistic timeline: six to eight weeks from purchase to wedding day.</p>
<p>Week one: purchase the suit. Buy from a maker with generous seam allowances (Italian and English suits, Brioni, Zegna, Tom Ford, Loro Piana) so the tailor has material to work with. Avoid fast-fashion suits with minimal seam allowances — they limit what alterations are possible.</p>
<p>Weeks two through five: first alteration fitting, alteration work (seven to ten business days), second fitting if needed, additional adjustments. Most wedding suits need waist suppression, sleeve length, trouser hemming, and often a jacket length adjustment.</p>
<p>Final two weeks: buffer for any further adjustments and for weight changes. Don't wait until the wedding week for the final fitting.</p>

<h2>What to Bring to Your First Appointment</h2>
<p><strong>The shoes you'll wear on the wedding day.</strong> Trouser break is meaningless without the right shoes. If you haven't bought wedding shoes yet, buy them before your first fitting.</p>
<p><strong>The shirt and tie/bowtie you'll wear.</strong> Jacket fit changes with what's underneath. If you're undecided, bring two options and discuss with the tailor.</p>
<p><strong>Photos of suits you like.</strong> Style preferences are easier to communicate visually than verbally. Pinterest, Instagram, fashion editorial — bring three to five images that capture the look you're after.</p>
<p><strong>Information about the wedding.</strong> Indoor, outdoor, beach, garden, ballroom — all change the appropriate fabric weight and silhouette. Day, evening, black-tie, semi-formal — all change the lapel style, button stance, and accessories. Tell the tailor everything.</p>

<h2>Common Wedding Tailoring Scenarios</h2>
<p><strong>The groom and groomsmen unified look.</strong> We coordinate full wedding parties regularly. The key is a unified palette without rigid uniformity — same fabric weight, same color family, but allow individual choices in lapel style, vest, tie. Schedule all groomsmen for fittings within a four-week window so all alterations can be coordinated to a single delivery date.</p>
<p><strong>Destination weddings.</strong> If the wedding is in a different climate (Mexico, Hawaii, the Caribbean), choose fabric for the destination, not for home. Wool-silk blends, tropical wools, and unstructured construction work better in heat than traditional worsteds.</p>
<p><strong>The second wedding or vow renewal.</strong> Often a smaller, less formal event. The wardrobe choice expands — bespoke linen, a beautifully tailored sport coat with dress trousers, a flannel three-piece for a fall vow renewal. Less constrained by tradition.</p>
<p><strong>The wedding where the suit will see future wear.</strong> Many clients want a wedding suit that doubles as a business or occasion suit afterward. Avoid wedding-only colors (ivory, very pale grey, anything with obvious wedding details). A midnight blue or charcoal bespoke suit can serve the wedding and a decade of future events.</p>

<h2>Avoiding the Most Common Mistakes</h2>
<p><strong>Starting too late.</strong> The single most common wedding tailoring problem. Start four to six months out for bespoke, two to three for made-to-measure, six to eight weeks for alterations. Earlier is always better.</p>
<p><strong>Underestimating weight changes.</strong> Pre-wedding fitness routines, wedding-stress eating patterns, last-minute travel — all can shift weight in either direction by five to ten pounds. The two-week buffer fitting is non-negotiable.</p>
<p><strong>Buying a fast-fashion suit and expecting bespoke results.</strong> Cheap suits with minimal seam allowances limit what's possible. If the budget is tight, spend less on the wedding venue and more on the suit; you'll wear the suit for years and the venue for one evening.</p>
<p><strong>Not bringing the right accessories to fittings.</strong> Wedding shoes, wedding shirt, wedding tie. If they don't exist yet, buy them before fittings.</p>
`,
  },

  'suit-care-guide': {
    slug: 'suit-care-guide',
    title: 'How to Care for Your Suit: Storage, Cleaning, and Maintenance',
    category: 'Care',
    date: 'October 8, 2023',
    datePublished: '2023-10-08',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663296530547/HiNwGCzzPXbrMcuD99ygxU/bello-garment-care-new-SbkXJCFLwSVdvdacopbh6Y.webp',
    description: 'How to store, clean, press, and maintain your suits so they last decades. Practical care guidance from twenty years of working on luxury garments.',
    body: `
<p>A well-made suit can last twenty years or more. Most don't, because most clients don't know how to care for them. Heavy dry cleaning, wire hangers, no rotation, no brushing, no resting — and the suit that should have been a heirloom is worn out in three years. This guide covers what actually works.</p>

<h2>Storage: The Foundation of Suit Care</h2>
<p>Hangers matter more than people realize. A suit jacket needs a proper wooden hanger with a shaped shoulder line that mirrors the jacket's natural drape. The shoulder should fully support the jacket without the hanger ends poking into the shoulder seams. Cheap thin wire hangers compress the shoulder over time and destroy the structure. Plastic hangers with sharp angles do the same.</p>
<p>For trousers, a clip-style hanger that grips the waistband works for short-term storage. For longer storage, a hanger with a horizontal bar that the trousers fold over preserves the crease better. If you have the closet space, hang trousers full-length next to the jacket rather than folded — fabric memory is real and folded trousers develop a crease at the fold that's harder to remove.</p>
<p>Spacing matters. Suits crowded against each other in a closet wrinkle, compress, and lose their shape. Aim for at least an inch of space between suits. If your closet is too full, the easy fix is fewer suits, not less space per suit.</p>
<p>Garment bags are useful for occasional travel or seasonal storage, but should not be used for daily storage. Wool needs to breathe; storing it sealed in plastic invites moisture and mildew. Cotton or canvas garment bags work for storage; plastic dry-cleaning bags should be removed and discarded.</p>

<h2>Rotation: Give Your Suits a Rest</h2>
<p>Wool needs twenty-four hours to recover from wear. The natural fiber crimps under your body heat and movement during the day, and it needs time to relax back to its original structure overnight. Wearing the same suit two days in a row dramatically accelerates wear and wrinkling.</p>
<p>The practical implication: own at least two business suits to alternate, ideally three. Better to own three good suits in rotation than one excellent suit worn daily. The rotation extends each suit's life dramatically.</p>
<p>After wearing, hang the suit immediately on its proper hanger. Don't drape it on a chair. Brush it before putting it away (covered below).</p>

<h2>Brushing: After Every Wear</h2>
<p>A natural-bristle clothes brush — boar bristle is ideal — removes the dust, lint, and surface debris that accumulate during the day. Brushing in the direction of the weave (from collar to hem) lifts particles out of the fibers and prevents them from working deeper into the fabric.</p>
<p>Brushing after every wear is the single most effective thing you can do to extend a suit's life. It reduces the need for dry cleaning, prevents surface buildup, and keeps the fabric looking fresh. Total time: thirty seconds per garment.</p>
<p>A second tool worth owning: a lint roller for fast removal of stubborn lint, animal hair, or thread. Don't use it as a substitute for brushing — the adhesive can pull fibers from the wool over time — but it's useful for finishing.</p>

<h2>Dry Cleaning: Less is More</h2>
<p>Dry cleaning is harsh. The solvents strip natural oils from wool, the heat shrinks fibers, the mechanical agitation breaks down fibers and stitching. Every dry cleaning ages a suit measurably. The goal is to dry clean as infrequently as possible while still keeping the suit clean.</p>
<p>How often is appropriate? For business suits in moderate wear, twice per year is usually plenty. For occasion-wear suits worn rarely, once per year or every other year is fine. For suits with specific stains or odors, clean as needed but only the affected garment.</p>
<p>Critical: clean the entire suit together, not just the jacket or just the trousers. If you clean only the trousers, they fade and shrink slightly while the jacket doesn't, and the suit no longer matches. If you must clean only one piece, accept that the suit may need to be replaced as a matched pair sooner.</p>
<p>Use a high-quality dry cleaner that specializes in luxury garments. The cheap chains use harsh solvents and aggressive processes. A good cleaner will use gentle solvents, hand-press where appropriate, and replace any missing buttons.</p>

<h2>Pressing and Steaming</h2>
<p>Between dry cleanings, light steaming refreshes a suit beautifully. A handheld steamer used at a gentle distance lifts wrinkles, restores drape, and reactivates the fabric's natural body. Steam in the direction of the weave, hold the steamer six to twelve inches from the fabric, and don't press the steamer head directly against the wool.</p>
<p>For deeper pressing — sharp creases on trousers, restored shape on a jacket — bring the suit to a professional. Home irons rarely produce the result a steam press in a tailoring shop does. Cost is typically $15-30 per garment.</p>
<p>One technique worth knowing: hanging a suit in a steamy bathroom (after a hot shower) for twenty minutes lifts most wrinkles without active steaming. The ambient steam is gentle and effective.</p>

<h2>Stain Treatment</h2>
<p>Address stains immediately, but carefully. The first move for any stain on wool is to blot — never rub — with a clean dry cloth to absorb as much as possible. Don't apply water unless you know the stain is water-soluble; water on certain stains sets them permanently.</p>
<p>For specific common stains: red wine and dark liquids respond to club soda applied gently with a cloth. Oil-based stains (cooking oil, lipstick) respond to talcum powder or cornstarch sprinkled on the stain to absorb the oil before brushing it away. Don't apply soap or detergent to wool — bring it to a tailor or cleaner for serious stains.</p>
<p>Worst case: many stains that look catastrophic can be removed by a competent cleaner if treated within a few days. The longer a stain sits, the harder it becomes. Don't wait.</p>

<h2>Traveling with Suits</h2>
<p>Folded properly, a suit can travel without significant wrinkling. The technique: fold the jacket vertically along the back seam (inside out), tuck the shoulders, and lay flat. Trousers fold along the crease line. Carry-on garment bags help for shorter trips; serious business travel may justify shipping the suit ahead.</p>
<p>On arrival, hang the suit immediately on a proper hanger in a steamy bathroom for twenty minutes. Most wrinkles will drop out. For stubborn wrinkles, light steaming with a travel steamer (which fits in carry-on) handles the rest.</p>

<h2>Annual Maintenance</h2>
<p>Once a year, bring your suits to a tailor for a maintenance pass. We check button security, lining condition, hem condition, and any wear points. Small repairs caught early prevent larger failures later. Cost is minimal and the suit's life extends significantly.</p>
<p>Beyond annual maintenance, watch for specific signs: loose buttons (replace before they fall off), separating lining at the armhole (early repair is cheap; full relining is expensive), pilling on areas of high friction (the seat of trousers, the inside of jacket sleeves), and shine on the elbows or seat (a sign of accelerated wear, sometimes salvageable with brushing and steam, sometimes requiring more attention).</p>
`,
  },
};
