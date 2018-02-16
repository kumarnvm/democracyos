import React from 'react'
import { t } from '../../client/i18n'
import { connect } from 'react-redux'
import { MenuItemLink, getResources } from 'admin-on-rest'

const Navbar = ({ resources, onMenuTap, logout }) => (
  <nav>
 {console.log(t('admin/home'))} 
    <MenuItemLink to='/admin' primaryText={t('admin/home')}  onClick={onMenuTap} />
    <MenuItemLink to='/admin/settings' primaryText={t('admin/settings')} onClick={onMenuTap} />
    <MenuItemLink to='/admin/posts' primaryText={t('admin/posts')} onClick={onMenuTap} />
    <MenuItemLink to='/admin/reactions' primaryText={t('admin/reactions')} onClick={onMenuTap} />
    <MenuItemLink to='/admin/users' primaryText={t('admin/users')} onClick={onMenuTap} />
  </nav>
)

const mapStateToProps = (state) => ({
  resources: getResources(state)
})
export default connect(mapStateToProps)(Navbar)
