'use client'

import { useState } from 'react'

const REVIEWS = [
  {
    id: 1,
    author: 'Marcus Vance',
    location: 'Denver, CO',
    rating: 5,
    date: 'Verified Buyer • 3 days ago',
    category: 'delivery',
    title: 'Arrived fully crated in heavy steel frame — zero damage!',
    text: 'Ordered the Sur-Ron Ultra Bee. Was nervous about freight delivery for a $6k+ bike, but the crating was incredible. Heavy steel internal cage with thick cardboard exterior. Liftgate driver called 30 mins before arrival and helped wheel it into my garage. Battery was pre-charged to 60% storage voltage.',
    purchasedItem: 'Sur-Ron Ultra Bee (Black Edition)',
    helpfulCount: 24,
    badge: 'Freight Verified',
  },
  {
    id: 2,
    author: 'Travis Holloway',
    location: 'Austin, TX',
    rating: 5,
    date: 'Verified Buyer • 1 week ago',
    category: 'service',
    title: 'Top tier customer service over WhatsApp and phone',
    text: 'I had multiple questions on Texas OHV registration and MCO documentation before pulling the trigger on the Stark Varg. The VoltTrack team answered every question within 15 minutes, provided the exact MCO paperwork needed, and made the whole process effortless.',
    purchasedItem: 'Stark VARG 80HP Alpha',
    helpfulCount: 19,
    badge: 'MCO Support',
  },
  {
    id: 3,
    author: 'David Sterling',
    location: 'Boise, ID',
    rating: 5,
    date: 'Verified Buyer • 2 weeks ago',
    category: 'followup',
    title: 'Incredible post-purchase follow-up and suspension guide',
    text: 'Two days after my Talaria Sting R MX4 arrived, their tech specialist checked in via message to see how assembly went. They sent a dedicated suspension sag setup guide for my weight (185 lbs). That kind of after-sales care is rare nowadays in the powersports industry.',
    purchasedItem: 'Talaria Sting R MX4',
    helpfulCount: 31,
    badge: 'Tech Care',
  },
  {
    id: 4,
    author: 'Cody & Elena R.',
    location: 'Phoenix, AZ',
    rating: 5,
    date: 'Verified Buyer • 2 weeks ago',
    category: 'security',
    title: 'Smooth wire & crypto payment with immediate confirmation',
    text: 'We opted for bank transfer to save on fees. Received instant automated email confirmation and tracking links once dispatched. The tracking was live throughout transit across 4 states.',
    purchasedItem: 'STACYC 16eDRIVE + 2x Spare Batteries',
    helpfulCount: 12,
    badge: 'Payment Verified',
  },
  {
    id: 5,
    author: 'Ryan Gallagher',
    location: 'Salt Lake City, UT',
    rating: 4,
    date: 'Verified Buyer • 3 weeks ago',
    category: 'delivery',
    title: 'Great bike, freight took 2 days longer than estimated',
    text: 'The Talaria Dragon is a beast and build quality is unmatched. The only small hiccup was the regional freight terminal delayed local delivery by 48 hours due to terminal congestion. Customer support kept me updated with the terminal manager directly though.',
    purchasedItem: 'Talaria Dragon 88V',
    helpfulCount: 15,
    response: {
      from: 'VoltTrack Customer Support',
      text: 'Thanks Ryan! We apologize for the regional terminal delay and appreciate your patience while our logistics team expedited the final drop-off.'
    }
  },
  {
    id: 6,
    author: 'Braden Miller',
    location: 'Eugene, OR',
    rating: 5,
    date: 'Verified Buyer • 1 month ago',
    category: 'followup',
    title: 'Out of the box assembly was under 45 minutes',
    text: 'Handlebars, front wheel, front fender and footpegs. Tools provided were adequate, torque specs were clearly printed in the booklet. Plugged into standard 110V wall outlet and was riding by afternoon.',
    purchasedItem: 'Sur-Ron Light Bee X (60V/40Ah)',
    helpfulCount: 28,
    badge: 'Easy Setup',
  },
  {
    id: 7,
    author: 'Kenneth O.',
    location: 'Reno, NV',
    rating: 3,
    date: 'Verified Buyer • 1 month ago',
    category: 'delivery',
    title: 'Liftgate fee clarification needed for rural mountain addresses',
    text: 'Bike arrived in perfect condition, but because I live in a rural mountainous zone, the freight carrier required an extra residential liftgate access charge that wasn\'t clear during my checkout call. VoltTrack customer service offered a $75 store credit to make up for the carrier miscommunication.',
    purchasedItem: 'Sur-Ron Ultra Bee',
    helpfulCount: 42,
    response: {
      from: 'VoltTrack Customer Support',
      text: 'Thank you for your feedback Kenneth. We have updated our dispatch workflow with all LTL carriers to ensure residential liftgate is always pre-covered for remote mountain destinations.'
    }
  },
  {
    id: 8,
    author: 'Jason K.',
    location: 'Tampa, FL',
    rating: 5,
    date: 'Verified Buyer • 1 month ago',
    category: 'service',
    title: 'Legit US dealer warranty registered with factory',
    text: 'Verified my VIN with the manufacturer directly. Warranty is 100% active in the US system. Don\'t buy gray market bikes when VoltTrack offers full factory support at competitive rates.',
    purchasedItem: 'Stark VARG 60HP Standard',
    helpfulCount: 37,
    badge: 'US Warranty',
  },
  {
    id: 9,
    author: 'Derek M.',
    location: 'Charlotte, NC',
    rating: 4,
    date: 'Verified Buyer • 2 months ago',
    category: 'followup',
    title: 'Follow-up on replacement charger was very fast',
    text: 'My initial charger had a loose fan casing. Messaged VoltTrack support with a quick video; a brand new replacement OEM fast charger was dispatched the next morning without any hassle.',
    purchasedItem: 'Talaria Sting MX3',
    helpfulCount: 16,
  },
  {
    id: 10,
    author: 'Garrett B.',
    location: 'Bakersfield, CA',
    rating: 2,
    date: 'Verified Buyer • 2 months ago',
    category: 'delivery',
    title: 'Carrier missed first delivery appointment window',
    text: 'I took half day off work for the 1pm-5pm delivery window, but the local carrier truck had mechanical trouble and had to reschedule to next morning. The bike itself is flawless, but freight scheduling was frustrating.',
    purchasedItem: 'Sur-Ron Light Bee X',
    helpfulCount: 22,
    response: {
      from: 'VoltTrack Customer Support',
      text: 'We sincerely apologize for the lost time Garrett. We have escalated this terminal with our logistics partner to prevent recurring scheduling delays.'
    }
  }
]

const CATEGORY_TABS = [
  { key: 'all', label: 'All Reviews (2,100+)' },
  { key: 'delivery', label: '🚚 Freight & Delivery' },
  { key: 'service', label: '💬 Customer Service' },
  { key: 'followup', label: '🛠️ After-Sales & Setup' },
  { key: 'security', label: '🔒 Payment & Security' },
]

export default function ReviewsSection() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedStar, setSelectedStar] = useState('all')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [helpfulMap, setHelpfulMap] = useState({})

  const filteredReviews = REVIEWS.filter((r) => {
    const matchCat = selectedCategory === 'all' || r.category === selectedCategory
    const matchStar = selectedStar === 'all' || r.rating === parseInt(selectedStar, 10)
    return matchCat && matchStar
  })

  const maxIndex = Math.max(0, filteredReviews.length - 1)
  const safeIndex = Math.min(currentIndex, maxIndex)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0))
  }

  const toggleHelpful = (id) => {
    setHelpfulMap((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <section className="reviews-section" aria-labelledby="reviews-heading">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-head" style={{ textAlign: 'center', marginBottom: 28 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <div className="tp-badge-glow">
              <span className="tp-star-icon">★</span>
              <span>Trustpilot Verified</span>
            </div>
            <span className="tp-live-dot">● Active Community</span>
          </div>
          <h2 id="reviews-heading" style={{ fontSize: '2.1rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 8 }}>
            Real Experiences from Real Riders
          </h2>
          <p style={{ maxWidth: 650, margin: '0 auto', color: 'var(--muted)', fontSize: '0.98rem', lineHeight: 1.6 }}>
            Over <strong>2,148+ verified riders</strong> trust VoltTrack for heavy-freight crated delivery, factory US warranties, and dedicated tech support.
          </p>
        </div>

        {/* Hero Review Summary Box (Trustpilot Style) */}
        <div className="review-dashboard-card">
          <div className="review-dash-grid">
            
            {/* Left: Overall TrustScore & Star presentation */}
            <div className="review-score-pane">
              <div className="review-score-title">Overall Rider Rating</div>
              <div className="review-big-num">
                4.4<span className="review-denom">/5</span>
              </div>
              
              {/* Trustpilot Green Star Tiles */}
              <div className="tp-star-cluster">
                {[1, 2, 3, 4].map((i) => (
                  <span key={i} className="tp-star-tile">
                    ★
                  </span>
                ))}
                <span className="tp-star-tile partial">
                  ★
                </span>
              </div>
              
              <div className="review-status-label">
                <span className="tp-status-tag">Great</span>
                <span className="review-count-text">2,148 verified reviews</span>
              </div>
            </div>

            {/* Middle: Rating Distribution Percentage Bars */}
            <div className="review-bars-pane">
              {[
                { stars: 5, pct: 76, count: '1,632' },
                { stars: 4, pct: 14, count: '301' },
                { stars: 3, pct: 6, count: '129' },
                { stars: 2, pct: 3, count: '64' },
                { stars: 1, pct: 1, count: '22' },
              ].map((row) => {
                const isSelected = selectedStar === String(row.stars)
                return (
                  <div key={row.stars} className={`tp-bar-row ${isSelected ? 'active-row' : ''}`}>
                    <button
                      type="button"
                      className="tp-bar-btn"
                      onClick={() => setSelectedStar(isSelected ? 'all' : String(row.stars))}
                    >
                      <span className="star-digit">{row.stars}</span>
                      <span className="star-glyph">★</span>
                    </button>
                    <div 
                      className="tp-bar-rail"
                      onClick={() => setSelectedStar(isSelected ? 'all' : String(row.stars))}
                    >
                      <div className="tp-bar-fill-bar" style={{ width: `${row.pct}%` }} />
                    </div>
                    <span className="tp-bar-pct">{row.pct}%</span>
                  </div>
                )
              })}
            </div>

            {/* Right: Guarantee & Protection Highlights */}
            <div className="review-perks-pane">
              <div className="review-perk-item">
                <div className="perk-icon-wrap" style={{ background: '#ecfdf5', color: '#059669' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    <polyline points="9 12 11 14 15 10"/>
                  </svg>
                </div>
                <div>
                  <div className="perk-title">100% Genuine Serial/VIN</div>
                  <div className="perk-desc">Factory registered US manufacturer warranty on every bike</div>
                </div>
              </div>

              <div className="review-perk-item">
                <div className="perk-icon-wrap" style={{ background: '#eff6ff', color: '#2563eb' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1" y="3" width="15" height="13"/>
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                    <circle cx="5.5" cy="18.5" r="2.5"/>
                    <circle cx="18.5" cy="18.5" r="2.5"/>
                  </svg>
                </div>
                <div>
                  <div className="perk-title">Steel Crate Freight</div>
                  <div className="perk-desc">Heavy-gauge internal steel skeleton + residential liftgate</div>
                </div>
              </div>

              <div className="review-perk-item">
                <div className="perk-icon-wrap" style={{ background: '#fdf2f8', color: '#db2777' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                </div>
                <div>
                  <div className="perk-title">Direct Technician Line</div>
                  <div className="perk-desc">US-based rider support for assembly, torque &amp; suspension</div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="review-filter-toolbar">
          <div className="review-pills-wrap">
            {CATEGORY_TABS.map((tab) => (
              <button
                key={tab.key}
                type="button"
                className={`review-category-tab ${selectedCategory === tab.key ? 'active' : ''}`}
                onClick={() => {
                  setSelectedCategory(tab.key)
                  setCurrentIndex(0)
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {selectedStar !== 'all' && (
            <button
              type="button"
              className="review-star-reset-pill"
              onClick={() => setSelectedStar('all')}
            >
              Filtering by {selectedStar}★ <span style={{ marginLeft: 4 }}>✕ Reset</span>
            </button>
          )}
        </div>

        {/* Review Cards Slider Viewport */}
        {filteredReviews.length === 0 ? (
          <div className="review-empty-state">
            <p style={{ color: 'var(--muted)', fontSize: 15, marginBottom: 12 }}>No customer reviews match your selected filter.</p>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => {
                setSelectedCategory('all')
                setSelectedStar('all')
              }}
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="review-slider-wrap">
            {/* Desktop 3-Card Carousel Window */}
            <div className="review-cards-container">
              {[0, 1, 2].map((offset) => {
                const itemIndex = (safeIndex + offset) % filteredReviews.length
                const review = filteredReviews[itemIndex]
                if (!review) return null
                const isHelpful = helpfulMap[review.id]
                const totalHelpful = review.helpfulCount + (isHelpful ? 1 : 0)

                return (
                  <div key={`${review.id}-${offset}`} className="premium-review-card">
                    {/* Card Header */}
                    <div className="card-top-row">
                      <div className="tp-card-stars">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span
                            key={i}
                            className={`tp-star-tile-sm ${i < review.rating ? '' : 'empty'}`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="review-verified-pill">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        Verified Order
                      </span>
                    </div>

                    {/* Author & Location */}
                    <div className="review-author-block">
                      <div className="review-avatar">
                        {review.author.charAt(0)}
                      </div>
                      <div>
                        <div className="review-author-name">{review.author}</div>
                        <div className="review-author-loc">{review.location} • {review.date}</div>
                      </div>
                    </div>

                    {/* Review Title & Content */}
                    <h3 className="review-card-title">
                      &ldquo;{review.title}&rdquo;
                    </h3>
                    <p className="review-card-text">
                      {review.text}
                    </p>

                    {/* Official Response Block if present */}
                    {review.response && (
                      <div className="review-support-reply">
                        <div className="reply-header">
                          <span className="reply-badge">Staff Response</span>
                          <span className="reply-author">{review.response.from}</span>
                        </div>
                        <p className="reply-body">{review.response.text}</p>
                      </div>
                    )}

                    {/* Bottom Meta */}
                    <div className="review-card-foot">
                      <div className="purchased-item-badge">
                        <span className="bike-icon">🏍️</span>
                        <span className="bike-name">{review.purchasedItem}</span>
                      </div>

                      <div className="review-foot-actions">
                        <button
                          type="button"
                          onClick={() => toggleHelpful(review.id)}
                          className={`review-helpful-btn ${isHelpful ? 'voted' : ''}`}
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill={isHelpful ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
                            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
                          </svg>
                          <span>Helpful ({totalHelpful})</span>
                        </button>
                        {review.badge && (
                          <span className="review-highlight-tag">{review.badge}</span>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Slider Navigation Bar */}
            <div className="review-slider-nav">
              <button
                type="button"
                className="review-nav-arrow"
                onClick={handlePrev}
                aria-label="Previous reviews slide"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>

              <div className="review-dot-bar">
                {filteredReviews.slice(0, Math.min(filteredReviews.length, 6)).map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    type="button"
                    className={`review-dot ${safeIndex === dotIdx ? 'active' : ''}`}
                    onClick={() => setCurrentIndex(dotIdx)}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                className="review-nav-arrow"
                onClick={handleNext}
                aria-label="Next reviews slide"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>

          </div>
        )}

      </div>
    </section>
  )
}
