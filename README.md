# README

## usersテーブル
|Column|Type|Options|
|------|----|null: false|
|email|string|null: false|
|password|string|null: false|
|nickname|string|index: true|
### Association
- has_many :groups, through: :groups_users
- has_many :groups_users
- has_many :messages

## groupテーブル
|Column|Type|Options|
|------|----|null: false|
|name|string|null: false|
### Association
- has_many :users, through: :groups_users
- has_many :groups_users
- has_many :messages

 
 ## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## messageテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|-------|
|image|text|-------|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group
