## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null :false|
|email|string|null :false|
|password|sttring|null :false|
### Association
- has_many :messages
- has_many :users_groups
- has_many :groups, through: :users_groups

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null :false|
### Association
- had_many :messages
- has_many :user_groups
- has_many :users, through: :users_groups

## users_groupsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null :false, foreign_key: true|
|group_id|integer|null :false, foreign_key: true|
### Association
- belogns_to :user
- belogns_to : group

## messages
|Column|Type|Options|
|------|----|-------|
|body|text||
|image|string||
|user_id|integer|null :false, foreign_key: true|
|group_id|integer|null :false, foreign_key: true|
### Association
- belogns_to :user
- belogns_to :group