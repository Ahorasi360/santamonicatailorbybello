// Structured content for each service page.
// Each entry feeds the page body, the FAQPage JSON-LD, and the Service JSON-LD.
// Keep content specific and useful — no generic filler.

export type ServiceFAQ = { q: string; a: string };

export type ServiceContent = {
  slug: string;
  // Used for metadata + Service schema
  shortName: string;
  serviceSchemaName: string;
  // Page body — rendered in order
  intro: string;            // 1-2 sentences setting up the service
  process: {                // H2: "Our Process" or similar
    heading: string;
    paragraphs: string[];
  };
  details: {                // H2: "What Makes the Difference"
    heading: string;
    paragraphs: string[];
  };
  pricingTiming: {          // H2: "Pricing & Timing"
    heading: string;
    paragraphs: string[];
  };
  whatIncluded: string[];   // Sidebar bullet list, also rendered in main flow as H2
  faqs: ServiceFAQ[];       // FAQPage schema + visible FAQ section
};

export const SERVICES: Record<string, ServiceContent> = {
  'custom-suits-santa-monica': {
    slug: 'custom-suits-santa-monica',
    shortName: 'Custom Suits',
    serviceSchemaName: 'Custom Suits',
    intro:
      'A custom suit is more than clothing — it is an investment in how you present yourself to the world. At Santa Monica Tailor by Bello, every custom suit is built from a pattern unique to your body, in a fabric chosen for your climate and your use, with hand-finished details that production garments cannot match.',
    process: {
      heading: 'The Process: From Consultation to Final Fitting',
      paragraphs: [
        'Every custom suit begins with a one-hour consultation. We discuss the occasions you dress for, the way you move through your day, and the style direction that fits both your personal taste and the silhouettes that suit your build. From there we move into fabric — Javier walks you through swatch books from Loro Piana, Dormeuil, Holland and Sherry, Cerruti, and Scabal, narrowing thousands of options down to the right weight, weave, and color for what you actually need.',
        'Pattern drafting follows: a custom pattern is cut to your specific measurements, not adapted from a stock pattern. The first fitting happens in basted form roughly three to four weeks later, where the suit is held together with white stitching that can be adjusted at every seam. A second fitting refines the fit further. Most clients are completed in two fittings; complex builds occasionally require a third.',
        'Final delivery is typically eight to twelve weeks from consultation. Rush timelines are possible for weddings and events with adequate notice.',
      ],
    },
    details: {
      heading: 'What Sets a Bello Custom Suit Apart',
      paragraphs: [
        'Construction is fully canvassed — a floating layer of horsehair canvas inside the chest gives the jacket its shape and drape, and the canvas moves with the wool over years of wear rather than fusing flat the way glued construction does. Lapels are hand-rolled with pad stitching, buttonholes are hand-cut and hand-stitched in silk twist, and the lining is hand-finished at the armholes and hem.',
        'Javier draws on more than twenty years of working on garments from every major luxury house — Brioni, Zegna, Brunello Cucinelli, Loro Piana, Kiton, Tom Ford — and that experience shows up in the small choices most clients never notice: the exact pitch of the sleeve at the elbow, the suppression at the waist relative to the chest, the placement of the front darts to balance posture.',
      ],
    },
    pricingTiming: {
      heading: 'Pricing and Lead Time',
      paragraphs: [
        'Bespoke two-piece suits begin at approximately $3,500 for standard wool fabrics, with most clients spending $4,500 to $7,500 depending on fabric choice. Premium mills (Loro Piana 130s, Holland and Sherry Royal Classic, Dormeuil Tonik) and special details (working buttonholes on the sleeve, contrast lining, ticket pocket) move the price up from there. Three-piece suits and tuxedos add roughly $600 to $900.',
        'Standard lead time is eight to twelve weeks. Weddings should be scheduled at least three months before the event to allow for fittings without rush charges.',
      ],
    },
    whatIncluded: [
      'Full bespoke pattern creation',
      'Premium Italian and English fabric selection',
      'Hand-stitched lapels and buttonholes',
      'Floating canvas construction',
      'Two to three personal fittings',
      'Lifetime adjustments on the pattern',
    ],
    faqs: [
      {
        q: 'How much does a custom suit cost?',
        a: 'Bespoke two-piece suits at Santa Monica Tailor by Bello start at approximately $3,500 for standard wool fabrics. Most clients spend $4,500 to $7,500 depending on fabric mill and detailing. Three-piece suits and tuxedos add roughly $600 to $900.',
      },
      {
        q: 'How long does a custom suit take?',
        a: 'Standard lead time is eight to twelve weeks from consultation to delivery, with two to three fittings in between. Rush timelines for weddings and events are possible with adequate notice — typically eight weeks minimum.',
      },
      {
        q: 'How many fittings are needed?',
        a: 'Most clients complete in two fittings: a baste fitting at roughly three to four weeks, and a refinement fitting before final delivery. Complex builds or unusual fits occasionally require a third fitting.',
      },
      {
        q: 'What fabrics do you carry?',
        a: 'We work with swatch books from Loro Piana, Dormeuil, Holland and Sherry, Cerruti, Scabal, and other major Italian and English mills. We help you choose by season, occasion, and how the suit will be worn — including travel and climate considerations specific to Los Angeles.',
      },
      {
        q: 'Is a custom suit worth it versus a high-end off-the-rack suit?',
        a: 'For specific body types — anyone whose chest measurement differs significantly from their drop, anyone with asymmetry in the shoulders, anyone tall or short of average proportions — yes, the difference is dramatic. For clients with relatively standard proportions, made-to-measure or expertly altered off-the-rack can deliver excellent results at a lower price point. We will tell you honestly which path makes sense for you.',
      },
      {
        q: 'What is "fully canvassed" construction?',
        a: 'Fully canvassed jackets have a floating layer of horsehair canvas sewn (not glued) into the chest. This is the construction method used by every premium tailoring house. It allows the jacket to drape naturally, mold to your body over time, and last decades rather than years. Glued ("fused") construction tends to bubble or separate over time, particularly with humidity or dry cleaning.',
      },
      {
        q: 'Do you offer custom shirts as well?',
        a: 'Yes — custom shirts are available alongside suit commissions or independently. Pricing typically ranges from $250 to $450 depending on fabric, with a four to six week lead time.',
      },
    ],
  },

  'suit-alterations-santa-monica': {
    slug: 'suit-alterations-santa-monica',
    shortName: 'Suit Alterations',
    serviceSchemaName: 'Suit Alterations',
    intro:
      'Even the finest off-the-rack suit rarely fits perfectly straight from the rack. Expert alterations are what transform a good suit into a great one — and at Santa Monica Tailor by Bello, we have been perfecting that transformation for over twenty years on suits from every major luxury house.',
    process: {
      heading: 'How a Suit Alteration Appointment Works',
      paragraphs: [
        'Bring your suit in for a fitting — there is no need to schedule far in advance for most alterations. Wear or bring the shirt and shoes you intend to wear with the suit, since both affect how a jacket sits at the collar and how trousers break at the shoe. The fitting itself typically takes twenty to thirty minutes.',
        'Javier evaluates the suit on you, marks the adjustments with chalk and pins, and walks you through what is possible and what is not. Some alterations are routine; others require a deeper conversation about trade-offs — for example, shortening the jacket length affects the visual proportion between the jacket and the trouser break. We discuss the options before any cuts are made.',
        'Most alterations are completed within seven to ten business days. Rush service is available for an additional fee when timing requires it.',
      ],
    },
    details: {
      heading: 'What Separates Expert Alterations From Standard',
      paragraphs: [
        'Real alteration is reconstruction, not just stitching. When a jacket needs to come in at the waist, we work from the side seams and the back seam together — not just one — to preserve the silhouette the maker intended. When trousers need to be tapered, we work from the inseam and the outseam in proportion to keep the line clean from hip to ankle. When sleeves need shortening, we shorten from the cuff for inexpensive suits and from the shoulder for high-end suits where preserving the working buttonholes matters.',
        'We work routinely on suits from Brioni, Zegna, Brunello Cucinelli, Loro Piana, Kiton, Tom Ford, Armani, Canali, Hermès, Prada, Versace, Ralph Lauren, Burberry, Gucci, and Hugo Boss, and we know the specific construction patterns and quirks of each maker. That experience matters when the work needs to look invisible.',
      ],
    },
    pricingTiming: {
      heading: 'Pricing and Turnaround',
      paragraphs: [
        'Most common alterations fall in these ranges: trouser hemming $25 to $45; trouser tapering $55 to $95; jacket sleeve shortening (from cuff) $45 to $75; jacket sleeve shortening (from shoulder) $125 to $185; jacket waist suppression $80 to $140; jacket length adjustment $145 to $225. Full suit resizing — taking a 44R down to a 42R, for example — typically runs $250 to $450 depending on the construction.',
        'Standard turnaround is seven to ten business days. Same-day or 48-hour service is available with a rush fee added to the alteration price.',
      ],
    },
    whatIncluded: [
      'Jacket tapering and waist suppression',
      'Sleeve shortening and lengthening',
      'Trouser hemming and tapering',
      'Shoulder adjustments',
      'Full suit resizing',
      'Vent and lining adjustments',
    ],
    faqs: [
      {
        q: 'How much do suit alterations cost?',
        a: 'Common alterations: trouser hemming $25 to $45, trouser tapering $55 to $95, jacket sleeve shortening $45 to $75 (from cuff) or $125 to $185 (from shoulder, preserving working buttonholes), jacket waist suppression $80 to $140, full suit resizing $250 to $450.',
      },
      {
        q: 'How long do suit alterations take?',
        a: 'Standard turnaround is seven to ten business days. Same-day and 48-hour rush service is available for an additional fee.',
      },
      {
        q: 'Can my suit be taken in or let out?',
        a: 'Most suits can be taken in by up to two sizes (typically two inches at the waist, an inch at the chest) with no compromise to the silhouette. Letting out depends on the seam allowance the maker left — most high-end suits have generous allowances, most fast-fashion suits do not. We check the seams during your fitting and tell you what is possible.',
      },
      {
        q: 'Should I shorten sleeves from the cuff or from the shoulder?',
        a: 'For most suits, cuff alterations are simpler and less expensive. For high-end suits with working buttonholes (surgeons cuffs), shoulder alterations preserve the buttonholes and the proportional placement of the buttons. We evaluate which approach is correct during the fitting.',
      },
      {
        q: 'Can you alter a suit that has already been altered before?',
        a: 'Usually yes, depending on what the previous alterations did to the seam allowance and the construction. Bring the suit in and we will assess what is achievable.',
      },
      {
        q: 'Do I need an appointment?',
        a: 'Walk-ins are welcome during business hours. For complex alterations or if you have multiple garments, an appointment ensures dedicated time and shorter waits.',
      },
      {
        q: 'Can you alter a suit I purchased online?',
        a: 'Absolutely. Online purchases are one of our most common alteration scenarios. Bring the suit in unworn (with tags if applicable for returns) and we will tell you what is achievable and how it will look.',
      },
    ],
  },

  'wedding-formalwear-tailoring': {
    slug: 'wedding-formalwear-tailoring',
    shortName: 'Wedding & Formalwear',
    serviceSchemaName: 'Wedding and Formalwear Tailoring',
    intro:
      'Your wedding day deserves a suit that fits as perfectly as the moment itself. At Santa Monica Tailor by Bello, we specialize in wedding and formalwear tailoring — whether you are commissioning a bespoke wedding suit from scratch, altering a designer purchase, or coordinating groomsmen to a unified look.',
    process: {
      heading: 'Wedding Tailoring Timeline',
      paragraphs: [
        'A bespoke wedding suit ideally starts four to six months before the wedding date. That allows time for consultation, fabric selection, pattern drafting, two to three fittings, and a final adjustment in the two weeks before the event to account for any weight changes from wedding-stress fitness routines.',
        'Made-to-measure timelines need two to three months. Off-the-rack alterations need a minimum of six to eight weeks, ideally eight to twelve. Rush timelines are possible but add cost and limit fabric choices.',
        'For wedding parties, we coordinate group fittings — typically two visits per groomsman, scheduled within a four-week window. We provide a fitting summary for each member and coordinate the alterations to a single delivery date.',
      ],
    },
    details: {
      heading: 'Wedding-Specific Considerations',
      paragraphs: [
        'A wedding suit photographs every minute of an eight-to-twelve-hour day, and the camera is unforgiving on fit. Specific things matter more on a wedding day than they do for daily wear: the collar must sit perfectly against the shirt without a gap, the jacket length must balance against the trouser break in a way that flatters every angle, the buttons must close cleanly when seated. Our fittings explicitly address these.',
        'Coordination across the wedding party is its own discipline. We help the groom and groomsmen choose a unified palette without rigid uniformity — same fabric weight and color family, individual choices in lapel style or vest. We also coordinate with the bride and her tailor when the formalwear interacts with the dress (think first dance, photographs, walking).',
      ],
    },
    pricingTiming: {
      heading: 'Pricing and Booking',
      paragraphs: [
        'Bespoke wedding suits begin at approximately $3,500 and typically run $4,500 to $8,500 depending on fabric, details, and any extra elements like a custom shirt or coordinated vest. Wedding suit alterations from off-the-rack suits typically run $200 to $500 per suit. Tuxedo alterations are similar.',
        'Book at least three months before the wedding. For full bespoke commissions, four to six months is the right window. Rush service for weddings within six weeks is possible but limited.',
      ],
    },
    whatIncluded: [
      'Bespoke wedding suit creation',
      'Off-the-rack wedding suit alterations',
      'Tuxedo and black-tie tailoring',
      'Groomsmen group fittings and coordination',
      'Day-of touch-ups and adjustments',
      'Rush service available',
    ],
    faqs: [
      {
        q: 'When should I start the wedding suit process?',
        a: 'For a fully bespoke wedding suit, four to six months before the wedding. For made-to-measure, two to three months. For off-the-rack alterations, a minimum of six to eight weeks. Earlier is always better.',
      },
      {
        q: 'How much does a wedding suit cost?',
        a: 'Bespoke wedding suits start at approximately $3,500 and typically run $4,500 to $8,500 depending on fabric, details, and additional pieces like a coordinated vest or custom shirt. Wedding suit alterations run $200 to $500 per suit.',
      },
      {
        q: 'Can you tailor my groomsmens suits as a group?',
        a: 'Yes. We coordinate group fittings for wedding parties, typically two visits per groomsman within a four-week window. We provide individual fitting summaries and coordinate all alterations to a single delivery date.',
      },
      {
        q: 'What if I lose or gain weight before the wedding?',
        a: 'This is anticipated and accounted for. Final adjustments are scheduled within the two weeks before the event specifically to address fit changes. Most wedding fittings include this buffer at no additional charge.',
      },
      {
        q: 'Can you do tuxedo alterations as well as suits?',
        a: 'Yes — tuxedo alterations are similar in scope and pricing to suit alterations. We work routinely on tuxedos from every major luxury house.',
      },
      {
        q: 'Do you offer same-day or rush wedding service?',
        a: 'For genuine emergencies — out-of-town weddings, last-minute purchases, unforeseen alterations — yes, with a rush fee added. The earlier you contact us, the more options remain.',
      },
    ],
  },

  'garment-care-repairs': {
    slug: 'garment-care-repairs',
    shortName: 'Garment Care & Repairs',
    serviceSchemaName: 'Garment Care and Repairs',
    intro:
      'The finest garments deserve the finest care. At Santa Monica Tailor by Bello, our garment care and repair services are designed to restore, preserve, and extend the life of your most valued pieces — from invisible weaving on a moth hole to a full relining of a beloved coat.',
    process: {
      heading: 'How We Approach Repairs',
      paragraphs: [
        'Bring the garment in for evaluation. Most repairs can be quoted on the spot. Complex restorations — particularly on vintage pieces or extensive damage — may need a day or two for a detailed assessment before quoting.',
        'We approach every repair with respect for the original maker. On a Brioni jacket, we use thread that matches the original stitching tension. On a vintage Loro Piana coat, we source lining fabric that matches the original weight and drape. The goal is not just to fix the damage but to make the repair invisible to anyone other than you.',
      ],
    },
    details: {
      heading: 'What We Can Repair',
      paragraphs: [
        'Routine repairs we handle daily: loose or missing buttons, broken zippers (both replacement and repair), frayed cuffs and collars, small rips, hem repairs, and moth damage. Our reweaving service can make holes in fine wool, cashmere, and silk effectively invisible — depending on the location and the fabric, the repair can be completely undetectable to the eye.',
        'More complex services: full coat relining when the original lining has worn through; structural repairs to jackets where canvas or shoulder padding needs replacement; collar and cuff replacement on dress shirts; complete restoration of heirloom or vintage pieces.',
        'What we will tell you we cannot fix: extensive damage to fragile or unique fabrics where the repair would visibly compromise the garment; damage to garments where the cost of restoration exceeds the value of the piece (we will say so honestly).',
      ],
    },
    pricingTiming: {
      heading: 'Pricing and Turnaround',
      paragraphs: [
        'Routine repair pricing: button replacement $5 to $15 per button, zipper repair $35 to $65, zipper replacement $65 to $125, hem repair $25 to $45, small rip $25 to $55, reweaving $45 to $185 depending on size and fabric. Coat relining typically runs $200 to $450. Structural restoration is quoted individually.',
        'Standard turnaround is seven to ten business days. Simple repairs (buttons, hems) can often be done same-day or within 48 hours.',
      ],
    },
    whatIncluded: [
      'Button replacement and reinforcement',
      'Zipper repair and replacement',
      'Lining replacement and repair',
      'Reweaving and invisible mending',
      'Cuff and collar restoration',
      'Vintage and heirloom restoration',
    ],
    faqs: [
      {
        q: 'How much does it cost to replace a zipper?',
        a: 'Zipper repair runs $35 to $65 depending on type. Full zipper replacement runs $65 to $125 depending on the garment and the zipper required (separating zippers, two-way zippers, and metal zippers cost more than standard nylon coil).',
      },
      {
        q: 'Can a hole in my wool jacket really be made invisible?',
        a: 'Often yes. Our reweaving service uses threads pulled from a hidden seam of the garment to fill the hole using the original wool. On finer fabrics and smaller holes, the repair is usually undetectable. On coarser weaves or larger damage, the repair is excellent but may be visible at very close inspection.',
      },
      {
        q: 'Can you repair vintage pieces?',
        a: 'Yes, vintage and heirloom restoration is one of our specialties. Bring the piece in for evaluation — we will assess what is needed, what is achievable, and what an honest restoration would cost.',
      },
      {
        q: 'How long do most repairs take?',
        a: 'Standard turnaround is seven to ten business days. Simple repairs like button replacement and basic hem repair can often be completed same-day or within 48 hours.',
      },
      {
        q: 'Can you replace the lining of a coat I love?',
        a: 'Yes. Full coat relining typically runs $200 to $450 depending on the coat construction and the lining fabric chosen. We can match the original lining or upgrade to a finer silk or Bemberg.',
      },
      {
        q: 'When is a garment beyond repair?',
        a: 'We tell you honestly when restoration cost exceeds the garments value or when the repair would visibly compromise the piece. In those cases we either decline the work or recommend a different approach.',
      },
    ],
  },

  'mens-tailoring-alterations': {
    slug: 'mens-tailoring-alterations',
    shortName: "Men's Tailoring & Alterations",
    serviceSchemaName: "Men's Tailoring and Alterations",
    intro:
      'A well-fitted wardrobe is built one garment at a time. At Santa Monica Tailor by Bello, our menswear alterations cover every piece you put on — suits, trousers, dress shirts, jackets, casual wear, knitwear, and outerwear — with the same precision regardless of price point.',
    process: {
      heading: 'How a Tailoring Appointment Works',
      paragraphs: [
        'Wear or bring the shoes and shirt you would wear with the garment. For dress shirts, bring an undershirt if you typically wear one — shirt fit changes with what is under it. Walk-ins are welcome during business hours; appointments are recommended for multiple garments or complex work.',
        'Javier evaluates the fit, identifies what needs adjustment, and pins the changes. For complex work he discusses the options before any cuts are made. Standard alterations are completed in seven to ten business days; simple work (hems, buttons) is often available same-day or in 48 hours.',
      ],
    },
    details: {
      heading: 'Beyond Suits: The Full Menswear Wardrobe',
      paragraphs: [
        'Dress shirts: collar adjustments, sleeve length, body taper, cuff replacement, and full reshaping of fit. Most dress shirt alterations cost $25 to $75. We work routinely on shirts from Charvet, Brioni, Loro Piana, Tom Ford, and Eton.',
        'Casual wear: jeans hemmed with the original distressed hem preserved ($45 to $65), chinos tapered and hemmed, knitwear sleeve and body adjustments, polo shirt body taper. We handle Edward Green and Crockett & Jones shoe-friendly trouser breaks for the dressier weekend wardrobe.',
        'Outerwear: overcoats, topcoats, and casual jackets — sleeve adjustment, body taper, length adjustment, and lining repair. Leather jackets are handled by a specialist; bring them in for evaluation.',
      ],
    },
    pricingTiming: {
      heading: 'Common Pricing',
      paragraphs: [
        'Trouser hemming $25 to $45, trouser tapering $55 to $95, dress shirt sleeve shortening $25 to $45, dress shirt body taper $45 to $75, jacket sleeve shortening $45 to $185 depending on whether shoulder work is needed, jacket waist suppression $80 to $140, jacket length adjustment $145 to $225. Custom requests quoted individually.',
        'Standard turnaround seven to ten business days; rush available.',
      ],
    },
    whatIncluded: [
      'Trouser hemming and tapering',
      'Dress shirt tailoring and darts',
      'Jacket alterations',
      'Casual wear adjustments',
      'Outerwear and overcoat work',
      'Full wardrobe consultations',
    ],
    faqs: [
      {
        q: 'Do you work on casual clothes or just dress wear?',
        a: 'Both. We handle jeans, chinos, polo shirts, knitwear, casual jackets, and outerwear with the same precision we bring to dress wear. The pricing scales with the work, not the piece.',
      },
      {
        q: 'Can you hem my jeans and keep the original hem?',
        a: 'Yes. Original-hem jeans alterations preserve the distressed or worn cuff so the hem looks like it has always been there. Most pairs cost $45 to $65.',
      },
      {
        q: 'How much does it cost to taper a dress shirt?',
        a: 'Body taper on a dress shirt typically runs $45 to $75 depending on how much taper is needed and whether darts or full side seams are involved.',
      },
      {
        q: 'Do you alter leather jackets?',
        a: 'We have a specialist handle leather work because the materials and tools are different from cloth tailoring. Bring the piece in and we can give you a quote and turnaround.',
      },
      {
        q: 'Whats the best order to alter a new wardrobe?',
        a: 'Suit jacket and trousers first since they involve the most fitting time. Dress shirts second once you know your suit silhouette. Casual wear last. We can plan a wardrobe sequence over multiple appointments if you are starting fresh.',
      },
      {
        q: 'Can I bring multiple pieces at once?',
        a: 'Absolutely encouraged — book an appointment if you have more than three garments so you have dedicated fitting time.',
      },
    ],
  },

  'luxury-brand-alterations': {
    slug: 'luxury-brand-alterations',
    shortName: 'Luxury Brand Alterations',
    serviceSchemaName: 'Luxury Brand Alterations',
    intro:
      'Luxury garments require luxury-level alterations. At Santa Monica Tailor by Bello, we have extensive experience working with the world\'s finest clothing brands — and we approach every piece with the same precision and respect that went into making it originally.',
    process: {
      heading: 'Why Luxury Brands Need Specialized Tailoring',
      paragraphs: [
        'A Brioni jacket is constructed differently than a Hugo Boss jacket. The canvas is different, the shoulder padding is different, the seam allowances are different, the lining attachment is different. A tailor who works the same way on both will damage one. Over twenty years of working with these makers, Javier has built up the specific knowledge each brand requires — how Kiton attaches its sleeves, where Zegna leaves its seam allowances, how Tom Ford constructs its shoulders.',
        'The result is alterations that look like the original maker did them. No tension changes in the threading, no visible adjustments on the back of the seams, no compromise to the construction. The garment retains every quality you paid for — it just fits you properly now.',
      ],
    },
    details: {
      heading: 'Brands We Work On Routinely',
      paragraphs: [
        'Italian: Brioni, Zegna (including Couture and Trofeo), Brunello Cucinelli, Loro Piana, Kiton, Cesare Attolini, Isaia, Canali, Corneliani, Tom Ford. Each has distinct construction methods; we know them all.',
        'English: Anderson and Sheppard, Henry Poole, Huntsman ready-to-wear, Dunhill, Burberry, Aquascutum. The English silhouette differs from the Italian; alterations need to respect that.',
        'American and other: Ralph Lauren Purple Label and Black Label, Tom Ford, Versace, Prada, Gucci, Hermès, Hugo Boss, Armani, Etro, Berluti. Each has its own quirks.',
      ],
    },
    pricingTiming: {
      heading: 'Pricing and Discretion',
      paragraphs: [
        'Luxury brand alterations are priced on the same scale as other alterations — the brand does not inflate the price. A jacket waist suppression on a Brioni is the same $80 to $140 it would be on any other jacket. What changes is the technique, not the rate.',
        'Discretion is standard. We do not photograph clients\' garments without permission, we do not mention specific clients to other clients, and we maintain the privacy that a wardrobe of this caliber deserves.',
      ],
    },
    whatIncluded: [
      'Brioni, Zegna, and Brunello Cucinelli alterations',
      'Loro Piana, Kiton, and Tom Ford tailoring',
      'Armani, Canali, and Hermès garments',
      'Prada, Versace, and Gucci alterations',
      'Ralph Lauren and Burberry adjustments',
      'Preservation of original construction and details',
    ],
    faqs: [
      {
        q: 'Will altering my luxury suit hurt its resale value?',
        a: 'Done correctly, no. The marks of a poor alteration — uneven stitching, visible tension changes, compromised construction — hurt resale value significantly. Expert alterations that match the original makers technique do not. We work specifically to preserve every quality the piece had when new.',
      },
      {
        q: 'Do you charge more for luxury brand alterations?',
        a: 'No. Alteration pricing is based on the work, not the brand. A jacket sleeve shortening on a Brioni costs the same as on any other jacket. What changes is the technique we use, not the price.',
      },
      {
        q: 'Will my Brioni still look like a Brioni after alteration?',
        a: 'Yes — that is the whole point. Our work on luxury brands preserves the original silhouette, drape, and construction. The only difference after alteration is that the suit fits you correctly. Working buttonholes are preserved, lining is reattached invisibly, seam allowances are maintained for future adjustments.',
      },
      {
        q: 'Can you handle a Kiton or Cesare Attolini hand-stitched suit?',
        a: 'Yes. We work on hand-stitched suits routinely, and we preserve the hand-stitching wherever the alteration interacts with it. Where new stitching is needed, we match the original technique — hand stitching by hand, machine stitching by machine.',
      },
      {
        q: 'Do you work on items purchased pre-owned or vintage?',
        a: 'Yes. Pre-owned and vintage luxury pieces often need both alteration to fit and restoration to bring them back to condition. We handle both together when needed.',
      },
      {
        q: 'How do I know which alterations are achievable on my piece?',
        a: 'Bring it in. We assess the construction, the seam allowances, and what the maker left for future work, and we tell you exactly what is achievable and what is not before any work begins.',
      },
    ],
  },

  'womens-tailoring-alterations': {
    slug: 'womens-tailoring-alterations',
    shortName: "Women's Tailoring & Alterations",
    serviceSchemaName: "Women's Tailoring and Alterations",
    intro:
      'Master tailor Javier Bello brings the same precision to women\'s garments as he does to bespoke menswear — from a simple hem to the full restructuring of a couture piece. Dresses, blazers, trousers, skirts, coats, evening wear, and bridal — altered with the discretion the garments deserve.',
    process: {
      heading: 'The Approach for Womenswear',
      paragraphs: [
        'Womenswear alterations differ from menswear in important ways: more pieces are cut on the bias, more rely on darts for shaping, and the relationship between fabric drape and figure is more complex. The work requires both technical skill and a developed eye for what fits.',
        'Bring the garment in with the underpinnings (foundation garments, hosiery, shoes) that you will wear with it — fit changes with all of these. Wedding and special-occasion fittings are scheduled in dedicated appointments with adequate time; standard alterations can be walk-ins or appointments.',
      ],
    },
    details: {
      heading: 'Bridal and Wedding Dress Alterations',
      paragraphs: [
        'Bridal alterations are a specialty. We work routinely with wedding gowns from Vera Wang, Monique Lhuillier, Oscar de la Renta, Carolina Herrera, Marchesa, and others. Standard bridal alteration packages include hem, bodice fit, bustle creation, and minor adjustments — typically $400 to $1,200 depending on complexity and fabric.',
        'Major bridal work — re-cutting a bodice, adjusting silhouette, complete restructuring — is quoted individually. We schedule bridal in dedicated two-hour appointments and recommend starting alterations six to eight weeks before the wedding with a final fitting one week before.',
      ],
    },
    pricingTiming: {
      heading: 'Standard Pricing',
      paragraphs: [
        'Common alterations: dress hemming $35 to $75 (more for beaded, layered, or lined hems), dress taking in $65 to $145, blazer alterations $80 to $185 (same scale as menswear), trouser alterations $35 to $95, skirt alterations $45 to $95, coat alterations $95 to $245. Evening wear and gowns quoted individually.',
        'On-location appointments are available across the Westside with a flat $250 travel fee for clients who prefer in-home fittings or whose schedules require it.',
      ],
    },
    whatIncluded: [
      'Bridal and wedding dress alterations',
      'Dress hemming, taking-in, and resizing',
      'Blazer and jacket alterations',
      'Trouser and pant adjustments',
      'Skirt alterations and lining',
      'Coat and outerwear tailoring',
      'Evening and special-occasion wear',
      'Luxury brand alterations — Brioni to Hermès',
    ],
    faqs: [
      {
        q: 'How much do wedding dress alterations cost?',
        a: 'Standard bridal alteration packages run $400 to $1,200 depending on complexity, fabric type, and bustle requirements. Major restructuring (re-cutting bodice, silhouette changes) is quoted individually after evaluation.',
      },
      {
        q: 'When should I schedule wedding dress alterations?',
        a: 'Start six to eight weeks before the wedding. Schedule a final fitting one week before the event to address any last-minute fit changes. For complex or major alterations, allow ten to twelve weeks.',
      },
      {
        q: 'Do you do on-location bridal fittings?',
        a: 'Yes. On-location fittings across the Westside are available with a flat $250 travel fee on top of the standard service charge. This is particularly common for brides who want fittings at home or who have schedule constraints.',
      },
      {
        q: 'Can you alter dresses I purchased online?',
        a: 'Absolutely — online purchases are a common reason clients come to us. Bring the dress in unworn (with tags if you might still return it) and we will tell you what alterations are possible and how they will look.',
      },
      {
        q: 'Do you work on luxury and designer womenswear?',
        a: 'Yes. We work routinely on pieces from Brioni, Zegna, Brunello Cucinelli, Loro Piana, Tom Ford, Hermès, Prada, Versace, Ralph Lauren, Burberry, Gucci, Hugo Boss, and others. Pricing matches our standard scale.',
      },
      {
        q: 'Can you alter a beaded or sequined gown?',
        a: 'Yes, with the time the work requires. Beading and sequins must be carefully removed before alteration and reapplied after, which adds significantly to the time and cost. Bring the gown in for an evaluation and accurate quote.',
      },
    ],
  },
};
