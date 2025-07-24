# EAS概要
### expo-dev-clientのインストール
Expo開発環境において、開発者向けの機能を提供するツール
- カスタムネイティブコードのテストが必要な場合
- 開発中のアプリケーションのデバッグが必要な場合
- より高度な開発機能が必要な場合

通常のExpo Go環境では利用できない機能もdev-client環境では利用可能になるため、より本番環境に近い形でのテストが可能になります。

```zsh
npm install expo-dev-client
```

### EAS CLIのインストール

```zsh
npm install -g eas-cli
```

eas version check
```zsh
eas -v
```

`eas-cli`は、Expoのクラウドビルドサービスとデプロイメントを管理するためのコマンドラインツールです。主な機能は以下の通りです：
1. **ビルド管理**
    - iOS/Androidアプリのビルドを クラウド上で実行
    - 開発用・プロダクション用のビルド設定管理
    - App Store/Google Playへの提出用バイナリの作成

2. **アップデート配信**
    - Over-the-Air (OTA) アップデートの公開と管理
    - アップデートチャンネルの管理

3. **主要なコマンド**
    ```zsh
    eas build              # アプリのビルドを実行
    eas update            # OTAアップデートの配信
    eas submit           # ストアへの提出
    eas device:create    # テスト用デバイスの登録
    ```
4. **設定管理**
    - `eas.json`ファイルで各種ビルド設定を管理
    - 環境ごとの設定（開発・ステージング・本番）を定義可能

5. **利点**
    - ローカル環境でのビルド環境構築が不要
    - CI/CDパイプラインとの統合が容易
    - クラウドでのビルドにより、一貫した環境でビルドが可能

### easログイン
```zsh
eas login
```

### easプロジェクトの作成
```zsh
eas init
```

### easプロジェクトの構成要素作成
```zsh
eas build:configure
```

### Androidアプリのシミュレーター＆実機用開発ビルドを実行
```text
eas.json
"development": {
   "developmentClient": true,
   "distribution": "internal",
   "node": "20.14.0"
},
```
```zsh
eas build --platform android --profile development
```
ビルドが完了したら、[expo.dev](https://expo.dev/)に移動し、開発者ビルドを確認しエミュレータや実機で確認することができます。\
実機での動作確認を行う場合は、USB接続でorbitを使用するか、QRコードをスキャンするかどちらでも行うことができます。\
ネイティブコードが変更されない限りは、開発者ビルドで確認することができます。\
JavaScriptコードが変更されるだけであれば、実機でそのまま確認することができます。

### iOSアプリのシミュレーター用開発ビルド
iOSシミュレータの開発ビルドは、iOSデバイス(.ipa形式)とは異なる.app形式で生成されます。
```text
eas.json
"ios-simulator": {
   "extends": "development",
   "ios": {
     "simulator": true
   }
 },
```
### iOSアプリのシミュレーター用開発ビルドを実行

```zsh
eas build --platform ios --profile ios-simulator
```


### **iOSアプリのデバイス用開発ビルドはApple developer programが必要なので一旦保留**

### 複数のビルドタイプを構成する(開発用・プレビュー用・本番用)

```zsh
eas build --profile development
```

developmentの開発ビルドを起動
```zsh
npm run dev
```

previewの開発ビルドを起動(Android用)
```zsh
eas build --platform android --profile preview
```

productionの開発ビルドを起動
```zsh
npm run start:prod
```
### 社内配布ビルドを作成
```zsh
eas build --platform android --profile preview
```
