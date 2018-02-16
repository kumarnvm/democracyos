import React from 'react'
import { Resource, List, Datagrid, TextField, Create, Edit, SimpleForm, DisabledInput, TextInput, DateInput, LongTextInput, DateField, EditButton, DeleteButton, PostTitle } from 'admin-on-rest'
import { t } from '../../client/i18n'
import BookIcon from 'material-ui/svg-icons/action/book'
export const PostIcon = BookIcon

export const PostList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source='id' />
      <TextField label={t('admin/content')}  source='content'/>
      <EditButton label={t('admin/edit')}/>
      <DeleteButton label={t('admin/delete')}/>
    </Datagrid>
  </List>
)

export const PostCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput label={t('admin/title')} source='title' />
      <TextInput label={t('admin/description')} source='description' options={{ multiLine: true }} />
      <LongTextInput label={t('admin/content')}  source='content' />
      <DateInput label={t('posts/openingDate')} source='openingDate' defaultValue={new Date()} />
      <DateInput label={t('posts/closingDate')} source='closingDate' defaultValue={new Date()} />
    </SimpleForm>
  </Create>
)

export const PostEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput label={t('admin/title')}  source='title' />
      <LongTextInput label={t('admin/description')} source='description' />
      <LongTextInput label={t('admin/content')} source='content' />
      <DateInput  label={t('posts/openingDate')}  source='openingDate' />
      <DateInput  label={t('posts/closingDate')}  source='closingDate' />
    </SimpleForm>
  </Edit>
)
