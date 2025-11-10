import React from 'react'
import Avatar from './Avatar'
import PlayerStats from './PlayerStats'
import './player-profile.css'

const safe = (v, fallback = '—') => (v === undefined || v === null || v === '') ? fallback : v
const hasValue = (v) => v !== undefined && v !== null && v !== '' && v !== 0

export default function PlayerProfile({ player, uid }) {
  console.log('🔍 ========== FULL PLAYER DATA (EXPAND THIS!) ==========')
  console.log(player)
  console.log('📋 ALL TOP-LEVEL KEYS:', Object.keys(player))
  
  const basic = player.basicInfo || player.BasicInfo || {}
  const social = player.socialInfo || player.SocialInfo || {}
  const clan = player.clanBasicInfo || player.ClanBasicInfo || {}
  const pet = player.petInfo || player.PetInfo || {}
  const duo = player.duoInfo || player.DuoInfo || player.dynamicDuoInfo || {}

  // Show ALL fields in basicInfo - one might contain duo partner
  console.log('📊 ========== ALL BASIC INFO FIELDS ==========')
  Object.keys(basic).forEach(key => {
    console.log(`  ${key}:`, basic[key])
  })
  
  console.log('👥 ========== ALL SOCIAL INFO FIELDS ==========')
  Object.keys(social).forEach(key => {
    console.log(`  ${key}:`, social[key])
  })
  
  // Look for outfit/clothing data and IMAGE URLS
  console.log('👔 ========== FULL OUTFIT DATA (EXPAND THIS!) ==========')
  console.log(player.outfit_data)
  console.log('🖼️ ========== CHECKING FOR IMAGE URLS ==========')
  console.log('  outfit_data.images:', player.outfit_data?.images)
  console.log('  outfit_data.profile:', player.outfit_data?.profile)
  console.log('  outfit_data keys:', Object.keys(player.outfit_data || {}))
  
  // Extract clothes from outfit_data.profile.clothes (array of item IDs)
  const outfitData = player.outfit_data || {}
  const profileData = outfitData.profile || {}
  const clothesArray = profileData.clothes || []
  
  console.log('👕 ========== CLOTHES DATA ==========')
  console.log('Clothes IDs:', clothesArray)

  const lastLogin = basic.lastLoginAt ? new Date(parseInt(basic.lastLoginAt, 10) * 1000) : null
  
  // Try multiple possible field names for account creation date
  const createdAtTimestamp = basic.createTime || basic.createdAt || basic.createAt || 
                             basic.accountCreatedAt || basic.registrationDate || 
                             basic.createtime || basic.created_at || basic.regtime || 
                             basic.registerTime
  
  console.log('Found creation timestamp:', createdAtTimestamp)
  
  const accountCreated = createdAtTimestamp ? 
    new Date(parseInt(createdAtTimestamp, 10) * (createdAtTimestamp.toString().length === 10 ? 1000 : 1)) : null
  
  console.log('Parsed account creation date:', accountCreated)

  // Only show items that actually have data
  const accountItems = [
    { label: 'Level', value: basic.level, show: hasValue(basic.level) },
    { label: 'EXP', value: basic.exp?.toLocaleString(), show: hasValue(basic.exp) },
    { label: 'Account ID', value: basic.accountId, show: hasValue(basic.accountId) },
    { label: 'Region', value: basic.region, show: hasValue(basic.region) }
  ].filter(item => item.show)

  // Try to find duo partner from multiple possible locations
  const cpInfo = player.cpInfo || player.CPInfo || {}
  const duoPartnerName = duo.partnerName || duo.partner || duo.name || duo.duoName || 
                         duo.nickname || basic.duoPartner || basic.dynamicDuo || 
                         basic.duo || basic.cpName || social.duoPartner || 
                         social.dynamicDuo || social.cpNickname || social.cpName ||
                         cpInfo.nickname || cpInfo.name
  
  console.log('✅ FINAL DUO PARTNER NAME:', duoPartnerName)

  const socialItems = [
    { label: 'Likes', value: basic.liked?.toLocaleString(), highlight: true, show: hasValue(basic.liked) },
    { label: 'Badges', value: basic.badgeCnt, show: hasValue(basic.badgeCnt) },
    { label: 'Language', value: basic.language, show: hasValue(basic.language) },
    { label: 'Dynamic Duo', value: duoPartnerName, highlight: true, show: duoPartnerName && duoPartnerName !== '' }
  ].filter(item => item.show)

  const additionalItems = [
    { label: 'Season', value: basic.seasonId, show: hasValue(basic.seasonId) },
    { label: 'Title', value: basic.title, highlight: true, show: hasValue(basic.title) },
    { label: 'Weapon Skins', value: basic.weaponSkinShows?.length, show: basic.weaponSkinShows?.length > 0 }
  ].filter(item => item.show)

  // Get clothes data from outfit_data.profile.clothes
  const finalOutfitData = player.outfit_data || {}
  const finalProfile = finalOutfitData.profile || {}
  const equipment = finalProfile.clothes || []
  
  console.log('✅ FINAL CLOTHES TO DISPLAY:', equipment)
  console.log('✅ CLOTHES COUNT:', equipment?.length || 0)

  return (
    <section className="player-panel">
      <div className="profile-left">
        <Avatar
          nickname={basic.nickname || player.nickname}
          avatarId={basic.headPic}
        />

        <div className="basic">
          <h2 className="nickname">{safe(basic.nickname, 'Unknown Player')}</h2>
          <div className="meta">
            <span className="uid">🆔 UID: {uid}</span>
            {basic.region && <span className="region">🌍 {basic.region}</span>}
          </div>

          {social.signature && <p className="signature">"{social.signature}"</p>}

          {/* Account Information */}
          {accountItems.length > 0 && (
            <div className="info-section">
              <h3 className="section-header">📋 Account Information</h3>
              <div className="info-grid">
                {accountItems.map((item, idx) => (
                  <div key={idx} className="info-item">
                    <span className="info-label">{item.label}</span>
                    <span className={`info-value ${item.highlight ? 'highlight' : ''}`}>
                      {item.value}
                    </span>
                  </div>
                ))}
                {accountCreated && (
                  <div className="info-item full-width">
                    <span className="info-label">Account Created</span>
                    <span className="info-value highlight">
                      {accountCreated.toLocaleDateString('en-US', { 
                        year: 'numeric', month: 'long', day: 'numeric' 
                      })}
                    </span>
                  </div>
                )}
                {lastLogin && (
                  <div className="info-item full-width">
                    <span className="info-label">Last Active</span>
                    <span className="info-value">
                      {lastLogin.toLocaleString('en-US', { 
                        dateStyle: 'medium', timeStyle: 'short' 
                      })}
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Social & Recognition */}
          {socialItems.length > 0 && (
            <div className="info-section">
              <h3 className="section-header">⭐ Social & Recognition</h3>
              <div className="info-grid">
                {socialItems.map((item, idx) => (
                  <div key={idx} className="info-item">
                    <span className="info-label">{item.label}</span>
                    <span className={`info-value ${item.highlight ? 'highlight' : ''}`}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Clan Information */}
          {clan.clanName && (
            <div className="info-section">
              <h3 className="section-header">🛡️ Clan Information</h3>
              <div className="info-grid">
                <div className="info-item full-width">
                  <span className="info-label">Clan Name</span>
                  <span className="info-value highlight">{clan.clanName}</span>
                </div>
                {clan.clanId && (
                  <div className="info-item">
                    <span className="info-label">Clan ID</span>
                    <span className="info-value">{clan.clanId}</span>
                  </div>
                )}
                {hasValue(clan.clanLevel) && (
                  <div className="info-item">
                    <span className="info-label">Clan Level</span>
                    <span className="info-value">{clan.clanLevel}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Additional Info */}
          {additionalItems.length > 0 && (
            <div className="info-section">
              <h3 className="section-header">🎮 Additional Info</h3>
              <div className="info-grid">
                {additionalItems.map((item, idx) => (
                  <div key={idx} className="info-item">
                    <span className="info-label">{item.label}</span>
                    <span className={`info-value ${item.highlight ? 'highlight' : ''}`}>
                      {item.value}
                    </span>
                  </div>
                ))}
                {pet.selected === 1 && hasValue(pet.level) && (
                  <div className="info-item">
                    <span className="info-label">Pet Level</span>
                    <span className="info-value">{pet.level}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Equipped Clothes */}
          {equipment && equipment.length > 0 && (
            <div className="info-section">
              <h3 className="section-header">👔 Equipped Outfit</h3>
              <div className="clothes-grid">
                {equipment.map((itemId, idx) => {
                  // Determine item type based on ID pattern
                  const itemType = itemId.toString().startsWith('203') ? '🎩 Hat' :
                                  itemId.toString().startsWith('204') ? '👕 Top' :
                                  itemId.toString().startsWith('211') ? '👟 Shoes' :
                                  itemId.toString().startsWith('205') ? '👖 Pants' :
                                  itemId.toString().startsWith('206') ? '🧤 Gloves' :
                                  itemId.toString().startsWith('207') ? '🎒 Backpack' :
                                  '👔 Outfit'
                  
                  return (
                    <div key={idx} className="clothing-item" title={`${itemType} - ID: ${itemId}`}>
                      <div className="clothing-image">
                        <span style={{fontSize: '32px'}}>{itemType.split(' ')[0]}</span>
                        <div className="item-id">#{itemId}</div>
                      </div>
                      <div className="clothing-name">{itemType.split(' ')[1]}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="profile-right">
        <PlayerStats player={player} />
      </div>
    </section>
  )
}
