// Area page content. CRITICAL: every entry must be substantively unique.
// Generic templates (e.g. "we serve [city] clients with attention to detail")
// trip Google's Helpful Content algorithms and tank rankings sitewide.
// Each area gets real specifics: drive time, route, local clientele, what
// clients in that area typically come for, parking/pickup arrangements, and
// FAQs tailored to that area's reality.

export type AreaFAQ = { q: string; a: string };

export type AreaContent = {
  slug: string;
  city: string;
  driveTime: string;
  // Intro paragraph — must be city-specific, not templated
  intro: string;
  // H2: Clientele section
  clienteleHeading: string;
  clienteleParagraphs: string[];
  // H2: What [city] clients typically come for
  servicesHeading: string;
  servicesParagraphs: string[];
  // H2: Getting to the studio from [city]
  gettingHereHeading: string;
  gettingHereParagraphs: string[];
  // FAQs specific to this area
  faqs: AreaFAQ[];
};

export const AREAS: Record<string, AreaContent> = {
  'santa-monica-tailor': {
    slug: 'santa-monica-tailor',
    city: 'Santa Monica',
    driveTime: 'Local',
    intro:
      'Santa Monica is home. Our studio at 724 Santa Monica Blvd has been the daily workshop of master tailor Javier Bello since 2004, and the majority of our long-term clients live or work within walking or short driving distance. For Santa Monica residents, this is the closest serious tailoring atelier — a true neighborhood asset for people who refuse to fly to Beverly Hills or fight downtown traffic for excellent work.',
    clienteleHeading: 'Who Comes to Us From Santa Monica',
    clienteleParagraphs: [
      'The Santa Monica client mix is unusually diverse: tech executives from the Silicon Beach corridor (Snap, Hulu, Activision, Edmunds, plus the smaller Santa Monica startups), entertainment industry professionals heading to events at the Pier or in Beverly Hills, attorneys and finance professionals based in the Bristol Plaza buildings, hospitality leadership from the major hotels (Fairmont Miramar, Shutters, Casa del Mar, Loews, Shore), and a strong cohort of long-tenure residents who have been clients for fifteen to twenty years.',
      'A meaningful share of our Santa Monica business is wedding-related — we are the in-area choice for grooms and brides celebrating at the local hotels and venues, and we coordinate full wedding parties on tight timelines that bouchard out-of-area shops cannot match.',
    ],
    servicesHeading: 'What Santa Monica Clients Most Often Bring In',
    servicesParagraphs: [
      'The top three requests from Santa Monica residents: business-suit alterations (driven by the tech and finance professional density), wedding and event tailoring (with hotels like Shutters and the Fairmont generating year-round demand), and garment repair/restoration on luxury pieces purchased at the Brentwood Country Mart, downtown Santa Monica boutiques, or further afield.',
      'Santa Monica is also our highest-volume location for women\'s alterations — particularly bridal, evening wear for hotel galas, and Brentwood-purchased designer pieces that need re-fitting after travel or weight changes.',
    ],
    gettingHereHeading: 'Finding the Studio',
    gettingHereParagraphs: [
      'Our studio at 724 Santa Monica Blvd is between 7th and Lincoln, just north of the I-10 freeway terminus. Metered street parking is generally available on Santa Monica Blvd and the surrounding side streets. The Lincoln Boulevard structure (two blocks away) offers covered paid parking for longer fittings or appointments with multiple garments. The Expo Line Downtown Santa Monica station is a five-minute walk; the 4th Street and the Big Blue Bus lines run on Santa Monica Blvd itself.',
      'For walk-ins during business hours, no appointment is needed. For fittings with multiple garments, complex bridal work, or after-hours visits, booking ahead ensures dedicated time.',
    ],
    faqs: [
      {
        q: 'Are you a real Santa Monica tailor — not a delivery service from elsewhere?',
        a: 'Yes. Javier Bello has worked at 724 Santa Monica Blvd since 2004. The work is done in our Santa Monica studio. No outsourcing, no overnight shipping of garments to a distant shop. Bring your piece in, meet the tailor, watch the work happen.',
      },
      {
        q: 'Can I drop off a garment for alteration without a fitting?',
        a: 'For very simple work (button replacement, basic hem from a known length), yes. For anything requiring a fit assessment — most alterations — a fitting is essential. Walk in during business hours or book an appointment.',
      },
      {
        q: 'How much parking is available?',
        a: 'Metered street parking is available on Santa Monica Blvd and the surrounding side streets. For longer visits, the Lincoln Boulevard parking structure (two blocks east) offers paid covered parking. For walk-in service of 20-30 minutes, street parking is usually sufficient.',
      },
      {
        q: 'Do you handle wedding parties for Santa Monica weddings?',
        a: 'Yes — coordinating wedding parties for weddings at local hotels (Shutters, Fairmont, Loews, Shore) and beachfront venues is one of our specialties. We book group fittings within a four-week window and coordinate all groomsmen alterations to a single delivery date.',
      },
      {
        q: 'I work in the tech corridor. Can I come during lunch?',
        a: 'Yes. We see many Snap, Hulu, and Edmunds employees during lunch hours. A typical alteration fitting takes 20-30 minutes. We try to keep dedicated appointment slots available between 12:00 and 1:30 weekdays for this reason.',
      },
    ],
  },

  'beverly-hills-tailor': {
    slug: 'beverly-hills-tailor',
    city: 'Beverly Hills',
    driveTime: '12-20 minutes from Beverly Hills',
    intro:
      'Beverly Hills clients come to Santa Monica Tailor by Bello for one reason: the level of work on luxury brands is higher than what is available locally. The drive from Beverly Hills to our Santa Monica studio runs roughly twelve to twenty minutes via Wilshire Boulevard depending on time of day — a small price for tailoring that respects the construction of a Brioni, Loro Piana, Kiton, or Tom Ford garment the way the original maker would.',
    clienteleHeading: 'Why Beverly Hills Clients Drive to Santa Monica',
    clienteleParagraphs: [
      'Beverly Hills has tailors. Some are good. The reason a meaningful share of our long-term client base lives between Doheny and Wilshire is that Javier built his reputation specifically on luxury brand work — Brioni, Zegna Couture, Brunello Cucinelli, Loro Piana, Kiton, Cesare Attolini, Tom Ford. The technical knowledge that comes from working on these brands every week for twenty-plus years is not common, and clients spending $4,000 to $15,000 per suit refuse to take chances on construction they cannot easily replace.',
      'A second factor: discretion. The Beverly Hills shopping experience involves a certain level of attention. Some clients prefer the lower-key Santa Monica studio for the privacy it offers, particularly for wardrobe consultations on extensive collections.',
    ],
    servicesHeading: 'What Beverly Hills Clients Typically Bring In',
    servicesParagraphs: [
      'Luxury brand alterations are the dominant category — alterations on suits, jackets, and trousers purchased on Rodeo Drive, in the Beverly Center, or at Madison Avenue and European boutiques. We work routinely on every major luxury house and know the specific construction methods each one uses.',
      'Custom suit commissions are a regular second category — Beverly Hills clients who want fully bespoke work without the markup of a Beverly Hills bespoke house. Our bespoke pricing typically runs 30 to 50 percent below comparable Rodeo Drive tailors with identical fabric mills.',
      'Restoration and repair on heirloom or vintage pieces is the third significant category — Brunello Cucinelli pieces from earlier collections, Brioni and Kiton suits a generation old, vintage Loro Piana coats. The restoration work allows clients to keep wearing pieces they paid significantly for over many years.',
    ],
    gettingHereHeading: 'Driving to Santa Monica From Beverly Hills',
    gettingHereParagraphs: [
      'The most reliable route is Wilshire Boulevard west, which delivers you directly to within four blocks of our studio. Drive time is twelve to fifteen minutes outside peak hours, eighteen to twenty-five minutes during rush. Santa Monica Boulevard is the alternative — slightly longer in distance, sometimes faster during rush. For clients coming from the Beverly Hills business district near Olympic, Olympic west to Lincoln to Santa Monica Blvd is competitive.',
      'For clients who prefer not to drive, we offer on-location appointments across the Westside, including the Beverly Hills 90210 and 90211 zip codes, with a flat $250 travel fee added to standard service charges. This is common for clients with extensive collections or busy schedules.',
    ],
    faqs: [
      {
        q: 'Why drive to Santa Monica when Beverly Hills has tailors?',
        a: 'For luxury brand work specifically (Brioni, Kiton, Loro Piana, Tom Ford, etc.), the level of technical knowledge required is uncommon. Javier built his twenty-plus year reputation on exactly this work. Many Beverly Hills clients have tried local tailors and switched after a negative experience with construction or fit.',
      },
      {
        q: 'Do you charge a premium for Beverly Hills clientele?',
        a: 'No. Our pricing is consistent regardless of which Westside city the client comes from. A jacket waist suppression is $80 to $140 whether you arrived from Beverly Hills or from down the block.',
      },
      {
        q: 'Can you come to me in Beverly Hills instead?',
        a: 'Yes. On-location appointments are available across the Westside including Beverly Hills 90210 and 90211, with a flat $250 travel fee on top of standard service charges. This is common for clients with extensive collections, busy schedules, or who prefer in-home fittings.',
      },
      {
        q: 'How long does the drive from Beverly Hills take?',
        a: 'Twelve to fifteen minutes outside peak traffic, eighteen to twenty-five during rush. Wilshire Boulevard west is the most reliable route.',
      },
      {
        q: 'Will my Brioni or Loro Piana suit be handled correctly?',
        a: 'Yes — luxury brand work is our specialty and Javier knows the specific construction methods each maker uses. We preserve working buttonholes, hand-stitched details, original lining attachments, and seam allowances throughout the alteration.',
      },
    ],
  },

  'brentwood-tailor': {
    slug: 'brentwood-tailor',
    city: 'Brentwood',
    driveTime: '8-15 minutes from Brentwood',
    intro:
      'Brentwood is one of our closest Westside neighbors — eight to fifteen minutes from the heart of the neighborhood to our Santa Monica studio depending on whether you take San Vicente, Bundy, or Sunset. For Brentwood residents and the families anchored in the school corridor, we are the practical first choice for serious tailoring without crossing into West LA proper.',
    clienteleHeading: 'The Brentwood Client Base',
    clienteleParagraphs: [
      'Brentwood clients tend to be families and established professionals — entertainment industry executives, law firm partners, finance principals, and accomplished medical specialists from the Brentwood/Westwood medical corridor. Many have been clients for ten to twenty years, and a meaningful share now bring in second-generation clients (children who watched the suits being altered growing up).',
      'A particular Brentwood specialty: school events. Brentwood, Harvard-Westlake, Crossroads, and Marlborough generate steady demand for father-of-the-graduate tailoring, mother-of-the-graduate dress work, and the boys and girls themselves who need their first proper suits or formal dresses for these milestones.',
    ],
    servicesHeading: 'What Brentwood Clients Most Often Bring In',
    servicesParagraphs: [
      'Off-the-rack alterations from the Brentwood Country Mart shops, plus Burberry, Theory, Bonobos, and Ralph Lauren purchases — usually well-cut to start with but rarely fitting perfectly out of the box.',
      'Designer dress alterations for women — Theory, Vince, Veronica Beard, plus the higher-end pieces from Ralph Lauren Collection and Loro Piana. Brentwood is one of our highest-volume cities for women\'s ready-to-wear alteration.',
      'Wedding and event tailoring for the Brentwood social calendar — galas at the country clubs, charity dinners, and the year-round wedding circuit. Most Brentwood wedding bookings come in roughly six to eight weeks out, which is the right window for off-the-rack alterations and limits to bespoke unless started earlier.',
    ],
    gettingHereHeading: 'Routes From Brentwood to Santa Monica',
    gettingHereParagraphs: [
      'Three main options. San Vicente Boulevard is the prettiest drive — south through the country club then west along San Vicente directly to the studio, typically twelve to fifteen minutes. Sunset Boulevard south to Lincoln to Santa Monica Blvd is competitive in light traffic and slightly faster at rush hour. Bundy south to Olympic to Lincoln is the third option, best avoided at rush.',
      'For clients whose schedules cannot accommodate the drive, on-location appointments are available throughout Brentwood with the standard $250 travel fee. We particularly recommend this for elderly clients, bridal work where transport is impractical, or clients altering multiple high-value pieces who prefer not to transport them.',
    ],
    faqs: [
      {
        q: 'Whats the fastest route from Brentwood to your studio?',
        a: 'In light traffic, San Vicente Boulevard west is the most pleasant — twelve to fifteen minutes. During rush, Sunset Boulevard south then Lincoln then Santa Monica Blvd is sometimes faster. Avoid Bundy at peak traffic.',
      },
      {
        q: 'Can you handle Theory, Vince, and Veronica Beard alterations for women?',
        a: 'Yes — these are among our most common Brentwood requests. The cuts are good to start with but rarely perfect off the rack. Standard dress alterations run $35 to $145 depending on complexity.',
      },
      {
        q: 'Do you serve the Brentwood school community?',
        a: 'Yes — Brentwood School, Harvard-Westlake, Crossroads, and Marlborough generate steady demand for graduation events. Book six to eight weeks ahead for off-the-rack alterations.',
      },
      {
        q: 'Can you come to my home in Brentwood?',
        a: 'Yes. On-location appointments are available throughout Brentwood for a flat $250 travel fee on top of standard service charges. Common for bridal, elderly clients, or multi-garment work.',
      },
      {
        q: 'Do you handle Brentwood Country Mart purchases?',
        a: 'Constantly. Burberry, Theory, Ralph Lauren, James Perse, and the other Country Mart tenants are well-cut starting points but almost always benefit from fitting adjustments.',
      },
    ],
  },

  'malibu-tailor': {
    slug: 'malibu-tailor',
    city: 'Malibu',
    driveTime: '20-40 minutes from Malibu',
    intro:
      'For Malibu residents, Santa Monica Tailor by Bello is the closest serious tailoring atelier — a twenty-to-forty-minute drive along the Pacific Coast Highway depending on traffic, season, and where in Malibu you start from. The drive is part of the deal: there are no comparable tailors in Malibu itself, and what is locally available rarely matches the brand-specific expertise required for the wardrobes Malibu actually owns.',
    clienteleHeading: 'The Malibu Client Profile',
    clienteleParagraphs: [
      'Malibu clients fall into two patterns. The first: full-time residents — entertainment industry principals, surf-and-real-estate-money families, and the established Malibu artistic community — who tend to own deep collections of casual-luxury (Brunello Cucinelli, Loro Piana cashmere, Tom Ford casual) plus the few formal pieces required for industry events and occasional galas. The second: second-home owners and weekenders who maintain a more conventional dual-coast wardrobe, with the LA pieces needing periodic refresh and alteration.',
      'A specifically Malibu emphasis: water-adjacent lifestyle wear. Lightweight cottons, linen suits, unstructured Cucinelli-style jackets, and high-end resortwear — pieces that need specific handling because the construction is less forgiving than traditional worsted wool.',
    ],
    servicesHeading: 'What Malibu Clients Typically Bring In',
    servicesParagraphs: [
      'Casual-luxury alterations dominate — Brunello Cucinelli, Loro Piana, Hermes, plus the lighter unstructured Italian jackets that suit Malibu weather year-round. These pieces need experienced hands because the construction is intentionally soft and easy to damage.',
      'Resort and beach formalwear — linen suits, lightweight cotton trousers, Cuban-collar shirts altered with the casual fit Malibu prefers (not the slim corporate cut you would expect downtown). We have specific patterns developed for this kind of wear.',
      'Black-tie and formal — the Malibu social calendar still requires real formalwear several times a year for industry galas and benefits. We see formal pieces less frequently than from Beverly Hills, but the work tends to be on excellent garments.',
    ],
    gettingHereHeading: 'The PCH Drive to the Studio',
    gettingHereParagraphs: [
      'From the Malibu Pier and central Malibu, the PCH drive is twenty to thirty minutes in normal traffic, longer on summer weekends or after storms. From the far west end (Trancas, Zuma, Point Dume), expect thirty to forty minutes. The route is straightforward: PCH south, continue past Sunset Boulevard, and the highway becomes Santa Monica Boulevard within a mile of our studio.',
      'For Malibu clients whose schedules or geography make the drive impractical, we offer on-location appointments anywhere in Malibu — Carbon Beach, Point Dume, Paradise Cove, Broad Beach, the Colony. The flat $250 travel fee covers travel anywhere in the 90265 zip code. We recommend booking on-location appointments for multi-garment work or for elderly clients.',
    ],
    faqs: [
      {
        q: 'Is the drive from Malibu really worth it?',
        a: 'For tailoring on the brands and pieces Malibu actually owns — Brunello Cucinelli, Loro Piana, lightweight Italian construction — the answer is yes. There is no comparable atelier in Malibu, and the work available locally typically does not have the brand-specific expertise these pieces require.',
      },
      {
        q: 'How long does the drive take?',
        a: 'From central Malibu and the Pier, twenty to thirty minutes in normal traffic. From the far west end (Trancas, Zuma, Point Dume), thirty to forty minutes. Add fifteen to thirty minutes on summer weekends or after storms.',
      },
      {
        q: 'Can you come to my home in Malibu?',
        a: 'Yes — on-location appointments are available anywhere in the 90265 zip code with a flat $250 travel fee. Common for multi-garment work, elderly clients, or schedules that cannot accommodate the drive.',
      },
      {
        q: 'Do you work on Brunello Cucinelli and Loro Piana casual wear?',
        a: 'Constantly. These are among our most common Malibu garments. The construction is intentionally soft and easy to damage in inexperienced hands; we are comfortable with the technique each maker uses.',
      },
      {
        q: 'Can you tailor linen suits to a relaxed Malibu fit?',
        a: 'Yes. We do not impose a corporate slim fit on linen and casual-luxury pieces — we cut to the relaxed proportion Malibu clients prefer. Bring the piece in and we will discuss the fit you actually want.',
      },
    ],
  },

  'pacific-palisades-tailor': {
    slug: 'pacific-palisades-tailor',
    city: 'Pacific Palisades',
    driveTime: '10-18 minutes from Pacific Palisades',
    intro:
      'Pacific Palisades is one of our closest Westside neighbors. From the Village or the surrounding canyons, the drive to our studio at 724 Santa Monica Blvd runs ten to eighteen minutes via PCH or Sunset Boulevard. For Palisades residents, we are the nearest serious tailoring atelier without crossing into Brentwood or downtown — close enough for routine alterations, with the technical depth for serious work on luxury garments.',
    clienteleHeading: 'The Palisades Client Profile',
    clienteleParagraphs: [
      'Pacific Palisades clients tend to be deeply established — multi-generational families in the canyons, entertainment industry principals whose careers span decades, and a strong contingent of athletes and former athletes who require alterations for the specific build and proportions athletic bodies bring. Many of our Palisades clients have been with us fifteen to twenty years.',
      'A specifically Palisades emphasis: father-and-son tailoring. With Palisades Charter High School and the families that bring their kids up through it, we routinely handle first-suit fittings for graduations, prep school events, and college transitions — alongside the senior wardrobe of the same family.',
    ],
    servicesHeading: 'What Palisades Clients Typically Bring In',
    servicesParagraphs: [
      'Business and professional alterations — many Palisades clients work in entertainment, finance, or law, with the wardrobes those careers require. Most pieces come in for routine fit refresh every twelve to eighteen months as bodies and styles evolve.',
      'Wedding work — the Palisades wedding circuit (Riviera Country Club, the home weddings in the canyons, the local hotels) generates steady year-round demand. We coordinate full wedding parties for Palisades weddings on tight timelines.',
      'Athletic body alterations — clients with significant chest-to-waist drops, broad shoulders, larger thighs and seats, and the proportions athletic bodies bring require specific knowledge to fit properly. Standard alteration techniques often fail on athletic bodies; we have developed approaches that work.',
    ],
    gettingHereHeading: 'Driving From Pacific Palisades',
    gettingHereParagraphs: [
      'Two main routes. Sunset Boulevard south then east along Santa Monica Blvd is the most direct — ten to fifteen minutes in normal traffic. PCH south from the Palisades Village area is competitive, particularly outside summer weekends. From the canyon homes (Riviera, Castellammare, Huntington), Sunset is reliably the better option.',
      'Many Palisades clients prefer on-location appointments for multi-garment work or when transporting valuable pieces. The flat $250 travel fee covers travel anywhere in 90272 and 90402.',
    ],
    faqs: [
      {
        q: 'How long does the drive from Pacific Palisades take?',
        a: 'Ten to fifteen minutes via Sunset Boulevard then Santa Monica Blvd. PCH south is competitive in light traffic, slower on weekends.',
      },
      {
        q: 'Do you work with athletic body types?',
        a: 'Yes — this is a specialty. Clients with broad shoulders, significant chest-to-waist drops, larger thighs and seats need specific alteration techniques. Standard methods often fail on athletic bodies; we have developed approaches that work for these proportions.',
      },
      {
        q: 'Can you handle a Palisades wedding party?',
        a: 'Yes — the Palisades wedding circuit (Riviera Country Club, canyon weddings, local hotels) is a regular part of our work. Group fittings within a four-week window, all alterations coordinated to a single delivery date.',
      },
      {
        q: 'Do you do first-suit fittings for high school graduations?',
        a: 'Constantly. We work with Palisades Charter families and other Westside schools to get teenagers into their first proper suit for graduations and prep school transitions. Patient, age-appropriate fitting that respects what a teenager actually wears.',
      },
      {
        q: 'Can you come to my home in the Palisades?',
        a: 'Yes — on-location appointments are available anywhere in 90272 and 90402 for a flat $250 travel fee on top of standard service charges.',
      },
    ],
  },

  'bel-air-tailor': {
    slug: 'bel-air-tailor',
    city: 'Bel Air',
    driveTime: '15-25 minutes from Bel Air',
    intro:
      'Bel Air clients come to Santa Monica Tailor by Bello for discretion and expertise — two qualities Bel Air specifically requires. The drive from the East Gate or the Bel Air Country Club area runs fifteen to twenty-five minutes via Sunset Boulevard depending on time of day. Many of our long-term Bel Air clients prefer on-location appointments at their homes, which we accommodate routinely.',
    clienteleHeading: 'The Bel Air Client Profile',
    clienteleParagraphs: [
      'Bel Air clients are entertainment industry principals, finance and tech founders, established physicians, and multi-generational old-LA families. The wardrobes are typically deep — Italian and English bespoke from earlier eras alongside current Brioni, Loro Piana, Kiton, and Cesare Attolini, plus the comprehensive casual collections that Bel Air lifestyle requires.',
      'Privacy matters here more than elsewhere. We do not discuss specific clients, do not photograph garments without permission, and do not allow walk-in foot traffic that overlaps with private appointments. Discreet handling is the standard, not the exception.',
    ],
    servicesHeading: 'What Bel Air Clients Typically Bring In',
    servicesParagraphs: [
      'Luxury brand alterations on the deepest level — we routinely handle alterations on rotating wardrobes of fifteen to thirty suits from Brioni, Zegna Couture, Brunello Cucinelli, Loro Piana, Kiton, Cesare Attolini, and Tom Ford. The volume of work for individual Bel Air clients is often equivalent to a small department\'s annual budget elsewhere.',
      'Bespoke commissions — Bel Air clients who already own bespoke from Savile Row and from Milan often add a Bello bespoke piece to their rotation to test the work before committing to a multi-suit relationship. The work has held up well to that test.',
      'Restoration of important pieces — vintage Brioni, generations-old Kiton, pieces from now-closed Roman tailors, English bespoke from before the 1990s. Many of these pieces have sentimental and irreplaceable value; the restoration work allows continued wear.',
    ],
    gettingHereHeading: 'Routes From Bel Air to the Studio',
    gettingHereParagraphs: [
      'From the East Gate area, Sunset Boulevard west to Lincoln to Santa Monica Blvd is the most reliable — fifteen to twenty minutes in normal traffic. From the upper canyons, the route adds five to ten minutes. From the Bel Air Country Club area, Stone Canyon to Sunset to Lincoln is the typical choice.',
      'Many Bel Air clients prefer on-location appointments throughout 90049, 90077, and the eastern reaches of Bel Air with the flat $250 travel fee. This is particularly common for routine alteration work on extensive collections where transporting multiple pieces is impractical, and for clients who simply prefer the home environment for fittings.',
    ],
    faqs: [
      {
        q: 'How is privacy handled?',
        a: 'Specifically. We do not discuss clients to other clients, do not photograph garments without permission, and schedule appointments to avoid foot-traffic overlap when requested. Discretion is a standard practice, not an upgrade.',
      },
      {
        q: 'Can you come to my home in Bel Air?',
        a: 'Yes — on-location appointments are available throughout Bel Air for a flat $250 travel fee on top of standard service charges. This is common for clients with extensive collections and for those who prefer the home environment for fittings.',
      },
      {
        q: 'Do you handle full-wardrobe rotation for Bel Air collections?',
        a: 'Constantly — clients with extensive collections schedule periodic rotation alteration where multiple pieces are brought in for refresh together. The volume work is one of our specialties.',
      },
      {
        q: 'Can you restore vintage bespoke pieces?',
        a: 'Yes. Vintage Brioni, Kiton, English bespoke from earlier decades, pieces from now-closed tailors — these restorations are routine. Bring the piece in for evaluation and an honest assessment of what is achievable.',
      },
      {
        q: 'How long does the drive from Bel Air take?',
        a: 'Fifteen to twenty minutes from the East Gate area via Sunset. Up to twenty-five minutes from the upper canyons or during rush hour.',
      },
    ],
  },

  'west-hollywood-tailor': {
    slug: 'west-hollywood-tailor',
    city: 'West Hollywood',
    driveTime: '20-30 minutes from West Hollywood',
    intro:
      'West Hollywood clients come to Santa Monica Tailor by Bello for tailoring that respects how WeHo actually dresses — sharper silhouettes than corporate Beverly Hills, more design-forward pieces, more comfort with strong style choices. The drive runs twenty to thirty minutes via Santa Monica Boulevard or Olympic depending on time of day, and a meaningful share of our WeHo work comes from the design and entertainment industries that anchor the neighborhood.',
    clienteleHeading: 'The West Hollywood Client Mix',
    clienteleParagraphs: [
      'West Hollywood brings together entertainment industry creatives, design professionals (interior, fashion, architectural), restaurant and hospitality leadership, plus a strong LGBTQ+ professional client base that has been with us for many years. The wardrobes tend to be design-conscious — Saint Laurent and Tom Ford alongside Brunello Cucinelli and Loro Piana — with attention to fit details that more conservative neighborhoods skip.',
      'Body diversity matters here. We work with a broader range of bodies and gender expressions than many traditional tailors, and the alterations reflect that — we cut to the actual body, not to outdated assumptions about how a body "should" be shaped.',
    ],
    servicesHeading: 'What West Hollywood Clients Typically Bring In',
    servicesParagraphs: [
      'Designer and sharper-silhouette pieces — Saint Laurent, Tom Ford, Versace, Dior, Prada — that require specific knowledge of each maker\'s construction to alter cleanly. The cuts on these brands are intentional and easy to ruin in inexperienced hands.',
      'Event and red-carpet tailoring — many WeHo clients work in industries where they appear at events regularly. We handle the last-minute fitting work that the entertainment calendar requires, including same-day and 48-hour rush when justified.',
      'Trans-inclusive tailoring — both feminizing and masculinizing alterations on garments across the conventional gender split. The work requires both technical skill and a respectful, patient fitting approach; we are comfortable with both.',
    ],
    gettingHereHeading: 'Driving From West Hollywood',
    gettingHereParagraphs: [
      'Santa Monica Boulevard west is the most direct route — twenty to twenty-five minutes outside rush, thirty during peak. Olympic Boulevard west then Lincoln then Santa Monica Blvd is sometimes faster during rush. From the eastern end of WeHo (Fairfax to La Brea), Beverly Boulevard to Santa Monica Blvd is competitive.',
      'On-location appointments are available throughout 90069 and the adjacent zip codes with the standard $250 travel fee. We particularly recommend this for event-week tailoring where rush timing matters.',
    ],
    faqs: [
      {
        q: 'Do you offer trans-inclusive tailoring?',
        a: 'Yes — both feminizing and masculinizing alterations on garments across the conventional gender split. The work requires technical skill plus a respectful, patient fitting approach. We are comfortable with both, and our long-term client base reflects that.',
      },
      {
        q: 'Can you handle Saint Laurent, Dior, and design-forward pieces?',
        a: 'Yes, routinely. These brands have intentional cuts that require specific knowledge to alter without losing the silhouette. Bring the piece in and we will walk you through what is achievable while preserving the line.',
      },
      {
        q: 'Do you offer same-day rush for event-week tailoring?',
        a: 'For genuine event timing, yes — same-day and 48-hour service is available with a rush fee added. The earlier you book, the more options remain.',
      },
      {
        q: 'How long does the drive from WeHo take?',
        a: 'Twenty to twenty-five minutes outside rush, up to thirty during peak. Santa Monica Boulevard west is most direct; Olympic west is sometimes faster during rush.',
      },
      {
        q: 'Can you come to my home in WeHo?',
        a: 'Yes — on-location appointments are available throughout 90069 for a flat $250 travel fee. Common for event-week tailoring where transport is impractical.',
      },
    ],
  },

  'culver-city-tailor': {
    slug: 'culver-city-tailor',
    city: 'Culver City',
    driveTime: '10-15 minutes from Culver City',
    intro:
      'Culver City has become one of our highest-growth client cities over the past five years — driven by the massive expansion of the Silicon Beach corridor (Apple, Amazon Studios, HBO, Sony Pictures, Activision) and the tech professional population that has settled there. The drive from downtown Culver City to our studio runs ten to fifteen minutes via Venice Boulevard or the 10 freeway.',
    clienteleHeading: 'The Culver City Client Profile',
    clienteleParagraphs: [
      'Culver City clients today are predominantly tech industry professionals — Apple, Amazon Studios, HBO, Sony Pictures, plus the smaller game studios and post-production houses. Many are relocating from San Francisco and bringing San Francisco style with them: less formal, more design-conscious, more comfort with high-end casual over corporate suiting.',
      'Wedding and event tailoring is also strong from Culver City — the area has its own wedding venue circuit (the Culver Hotel, the Sony lot for industry events, the small boutique venues that have opened in the past five years) plus the growing food scene that anchors evening events.',
    ],
    servicesHeading: 'What Culver City Clients Typically Bring In',
    servicesParagraphs: [
      'Casual-luxury alterations — Brunello Cucinelli, Loro Piana, Tom Ford casual, plus the design-conscious pieces from Theory, James Perse, Vince, and the Mr Porter universe. The tech industry has built its own dress code around these brands, and the alterations need to preserve the relaxed silhouette while improving fit.',
      'First-suit-and-suit-jacket work — many tech professionals come to us for their first proper suit, often for a wedding or family event. We handle the consultation-and-purchase guidance alongside the alteration, walking them through what to buy and where, then handling the fit.',
      'Wedding tailoring — the Culver City wedding scene generates steady year-round demand. We coordinate wedding parties for venues including the Culver Hotel and the Sony Studios screening rooms.',
    ],
    gettingHereHeading: 'Driving From Culver City',
    gettingHereParagraphs: [
      'Venice Boulevard west is the most reliable in light traffic — ten to fifteen minutes directly to within blocks of our studio. The 10 freeway west to Lincoln to Santa Monica Blvd is competitive during off-peak hours and significantly slower at rush. From the eastern end of Culver City (around the Helms Bakery district), Washington Boulevard west then Lincoln is another option.',
      'For tech industry clients with constrained lunch schedules, the studio is set up for efficient walk-in alteration fittings of twenty to thirty minutes. We see many Apple, Amazon Studios, and HBO employees between 12:00 and 1:30 for this reason.',
    ],
    faqs: [
      {
        q: 'Can I come during lunch from the tech corridor?',
        a: 'Yes — many Apple, Amazon Studios, HBO, and Sony Pictures employees come during 12:00 to 1:30 lunch breaks. A typical alteration fitting takes 20-30 minutes. We keep dedicated time available in this window.',
      },
      {
        q: 'Do you handle first-suit purchases?',
        a: 'Constantly. Tech industry clients often need their first proper suit for a wedding or family event. We provide guidance on what to buy and where, then handle the alteration. This is a common service for clients in the $1,500 to $4,000 first-suit budget range.',
      },
      {
        q: 'How long does the drive from Culver City take?',
        a: 'Ten to fifteen minutes via Venice Boulevard west in light traffic. The 10 freeway west is competitive at off-peak, slower at rush. Washington Boulevard west is an alternative from the eastern Culver City neighborhoods.',
      },
      {
        q: 'Can you tailor Theory, James Perse, and the tech-industry casual wardrobe?',
        a: 'Yes — these are among our most common Culver City requests. The cuts are good starting points but rarely fit perfectly out of the box, and the relaxed silhouette these brands intend needs to be preserved through any alteration.',
      },
      {
        q: 'Do you handle Culver City wedding parties?',
        a: 'Yes — the Culver Hotel, Sony lot events, and other Culver City venues generate steady wedding business. Group fittings within a four-week window, all alterations coordinated to a single delivery date.',
      },
    ],
  },
};
