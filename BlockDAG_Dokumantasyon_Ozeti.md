# BlockDAG Teknik Dokümantasyon Özeti

## 📚 Genel Bakış

BlockDAG, Bitcoin'den ilham alan, en gelişmiş Layer 1 blockchain platformlarından biridir. Proof-of-Work (PoW) algoritması kullanarak yüksek hız, güvenlik ve merkeziyetsizlik sunar.

**Kaynak:** [docs.blockdagnetwork.io](https://docs.blockdagnetwork.io/)

---

## 🎯 Temel Kavramlar

### BDAG (BlockDAG Token)
- BlockDAG ekosisteminin yerel kripto para birimi
- İşlemler, akıllı sözleşme yürütmeleri ve ağ güvenliği için kullanılır
- Merkeziyetsiz uygulamaları destekler
- Madencilik teşvikleri yoluyla ağı güvence altına alır
- Eşler arası değer transferlerini mümkün kılar

**Kaynak:** [What is BDAG?](https://docs.blockdagnetwork.io/get-started/what-is-bdag)

### Gas Ücretleri
- İşlemleri ve akıllı sözleşme işlemlerini yürütmek için gereken hesaplama çabasını ölçen birim
- Her işlem belirli bir miktar gas tüketir
- Toplam gas ücreti = (gas miktarı) × (birim gas başına maliyet)
- Daha yüksek gas ücretleri, işlemlerin daha hızlı onaylanma olasılığını artırır
- Ağ kaynaklarının verimli tahsis edilmesini sağlar ve spam saldırılarını önler

**Kaynak:** [Gas Fees](https://docs.blockdagnetwork.io/get-started/introductory-concepts/gas-fees)

### EVM Hesapları
- Ethereum Sanal Makinesi tabanlı hesap modeli
- İki tür hesap:
  1. **EOA (Externally Owned Accounts)**: Dışarıdan sahip olunan hesaplar
  2. **Smart Contract Accounts**: Akıllı sözleşme hesapları
- Kullanıcıların işlemleri göndermesine, akıllı sözleşmeleri dağıtmasına ve dApp'lerle etkileşimde bulunmasına olanak tanır

**Kaynak:** [EVM Account](https://docs.blockdagnetwork.io/get-started/introductory-concepts/accounts/evm-account)

### Merkeziyetsiz Uygulamalar (dApps)
- Merkezi bir otoriteye bağlı olmadan çalışan blockchain tabanlı uygulamalar
- Şeffaflık, güvenlik ve verimlilik sağlar
- Akıllı sözleşmeler kullanarak işlemleri otomatikleştirir
- BlockDAG'in paralel işlem teknolojisi sayesinde daha hızlı çalışır
- Daha ölçeklenebilir ve işlem maliyetleri düşüktür

**Kaynak:** [Decentralized Application (dApps)](https://docs.blockdagnetwork.io/get-started/introductory-concepts/decentralized-application-dapps)

---

## 🏗️ BlockDAG Mimarisi

### Teknik Özellikler
- **DAG Yapısı**: Directed Acyclic Graph (Yönlendirilmiş Asiklik Grafik)
- **Konsensüs**: Proof-of-Work (PoW)
- **GhostDAG Protokolü**: Kısmi sıralama ve ölçeklenebilirlik sağlar
- **Paralel Blok Doğrulama**: Birden fazla blok eşzamanlı doğrulanabilir
- **Yüksek İşlem Hızı**: Binlerce işlem/saniye (TPS) kapasitesi
- **P2P Ağ**: TCP ve UDP protokollerini kullanır
- **EVM Uyumluluğu**: Ethereum Sanal Makinesi ile tam uyumlu
- **Hibrit Model**: Hem UTXO hem de hesap tabanlı modelleri destekler

### Çekirdek Modüller
- **Tam Düğümler**: Ağın omurgasını oluşturur, tüm DAG'in bir kopyasını saklar
- **Madenci Düğümleri**: PoW bulmacalarını çözerek yeni bloklar ekler

**Kaynak:** [BlockDAG Architecture](https://docs.blockdagnetwork.io/get-started/blockdag-architecture)

---

## 🌐 Test/Main Ağları

### Awakening Testnet
- **Durum**: Aktif
- **Amaç**: Tüm temel özelliklerin test edildiği ve sağlamlaştırıldığı test ağı
- **RPC URL**: `https://relay.awakening.bdagscan.com`
- **Chain ID**: `1043`
- **Para Birimi Sembolü**: BDAG
- **Ağ Adı**: BlockDag

**Kaynak:** [Awakening Network Details](https://docs.blockdagnetwork.io/test-main-networks/awakening-network-details)

---

## 🛠️ BlockDAG Araçları

### 1. Block Explorer
- Blockchain üzerindeki işlemleri, adresleri ve blokları gerçek zamanlı olarak takip etme
- İki tür:
  - **EVM Explorer**: EVM tabanlı işlemleri, blokları, sözleşmeleri, tokenleri ve düğümleri izler
  - **UTXO Explorer**: UTXO tabanlı işlemleri ve blokları görüntüler
- Gerçek zamanlı veri görselleştirme
- İşlem detayları ve akıllı sözleşme etkileşimleri
- Ağın genel durumu hakkında kapsamlı gösterge paneli

**Kaynak:** [Block Explorer](https://docs.blockdagnetwork.io/blockdag-tools/block-explorer)

### 2. Faucet
- Testnet üzerinde deneme yapmak için ücretsiz test BDAG coinleri sağlar
- Testnet cüzdan adresini girerek belirli miktarda testnet BDAG coin alınabilir
- Akıllı sözleşme dağıtımı, işlem gerçekleştirme ve ağ özelliklerini keşfetme amacıyla kullanılır
- Finansal risk olmadan ağın özelliklerini test etme imkanı

**Kaynak:** [Faucet](https://docs.blockdagnetwork.io/blockdag-tools/faucet)

### 3. Smart Contract IDE
- **URL**: [https://ide.awakening.bdagscan.com/](https://ide.awakening.bdagscan.com/)
- Akıllı sözleşmeleri yazma, derleme, dağıtma ve hata ayıklama için entegre geliştirme ortamı
- Özellikler:
  - Sözdizimi vurgulama
  - Otomatik tamamlama
  - Entegre derleyici
  - Hata ayıklayıcı
  - Testnet veya mainnet'e doğrudan dağıtım araçları
  - Gerçek zamanlı kod derleme
  - Adım adım hata ayıklama

**Kaynak:** [Smart Contract IDE](https://docs.blockdagnetwork.io/blockdag-tools/smart-contract-ide)

### 4. Contracts Wizard
- Akıllı sözleşme şablonları oluşturma aracı
- ERC20, ERC721 gibi standart token sözleşmeleri için hızlı başlangıç
- MetaMask ile entegrasyon desteği

**Kaynak:** [Contracts Wizard](https://docs.blockdagnetwork.io/blockdag-tools/contracts-wizard)

---

## 🔌 BlockDAG Client APIs

### EVM RPC
- Ethereum uyumlu RPC endpoint'leri
- Standart Ethereum JSON-RPC metodlarını destekler
- Web3 kütüphaneleri ile uyumlu

**Kaynak:** [EVM RPC](https://docs.blockdagnetwork.io/blockdag-client-apis/evm-rpc)

### WebSocket
- Gerçek zamanlı veri akışı için WebSocket API
- Blok ve işlem güncellemelerini dinleme
- Event subscription desteği

**Kaynak:** [WebSocket](https://docs.blockdagnetwork.io/blockdag-client-apis/websocket)

---

## 📱 BlockDAG dApps

### dApp Oluşturma
- **Araç**: CLI tabanlı dApp oluşturma aracı
- **Özellikler**:
  - Modern frontend (Next.js tabanlı)
  - Çift akıllı sözleşme ortamları (Hardhat ve Foundry)
  - Web3 entegrasyonu
  - Cüzdan bağlantı arayüzü
  - Git başlatma
  - Temel cüzdan bağlantısı
- Tam özellikli bir BlockDAG merkeziyetsiz uygulamasını hızlı bir şekilde oluşturur

**Kaynak:** [Create dApps](https://docs.blockdagnetwork.io/blockdag-dapps/create-dapps)

### Örnek dApps
- **Reflection dApp**: Kullanıcı rehberi mevcut
- **Lottery dApp**: Kullanıcı rehberi mevcut

**Kaynak:** 
- [dApps Overview](https://docs.blockdagnetwork.io/blockdag-dapps/dapps-overview)
- [Reflection User Guide](https://docs.blockdagnetwork.io/blockdag-dapps/reflection-user-guide)
- [Lottery User Guide](https://docs.blockdagnetwork.io/blockdag-dapps/lottery-user-guide)

---

## ⛏️ Nodes and Mining

### Node Türleri
- **Tam Düğümler**: Tüm blockchain'in bir kopyasını saklar ve işlemleri doğrular
- **Madenci Düğümleri**: PoW bulmacalarını çözerek yeni bloklar ekler

### Madencilik
- Ağ güvenliğini sağlar
- Yeni coinlerin dolaşıma girmesini sağlar
- PoW bulmacalarını çözerek blok ödülleri ve işlem ücretleri kazanılır

**Kaynak:** [Nodes and Mining](https://docs.blockdagnetwork.io/get-started/nodes-and-mining)

---

## 🎓 Yazım Şekilleri ve Terminoloji

### Doğru Yazımlar
- **BlockDAG**: Platform adı (büyük B ve DAG)
- **BDAG**: Token sembolü (tümü büyük harf)
- **dApp**: Merkeziyetsiz uygulama (küçük d, büyük A)
- **EVM**: Ethereum Virtual Machine
- **UTXO**: Unspent Transaction Output
- **PoW**: Proof-of-Work
- **DAG**: Directed Acyclic Graph

### Teknik Terimler
- **GhostDAG**: BlockDAG'in kullandığı protokol
- **Awakening**: Testnet adı
- **Faucet**: Test coin dağıtım aracı
- **IDE**: Integrated Development Environment
- **RPC**: Remote Procedure Call
- **WebSocket**: Gerçek zamanlı iletişim protokolü

---

## 🔗 Önemli Linkler

### Dokümantasyon
- Ana Dokümantasyon: https://docs.blockdagnetwork.io/
- Introduction: https://docs.blockdagnetwork.io/introduction-to-blockdag

### Araçlar
- Smart Contract IDE: https://ide.awakening.bdagscan.com/
- Block Explorer: https://bdagscan.com/
- Faucet: BlockDAG dokümantasyonunda belirtilen adres

### Ağ Bilgileri
- **Testnet RPC**: `https://relay.awakening.bdagscan.com`
- **Chain ID**: `1043`
- **Network Name**: `BlockDag`
- **Currency Symbol**: `BDAG`

---

## 📝 Geliştirici Notları

### MetaMask Entegrasyonu
BlockDAG ağını MetaMask'e eklemek için:
1. MetaMask'i açın
2. Ağ ekleme seçeneğini seçin
3. Aşağıdaki bilgileri girin:
   - **Ağ Adı**: BlockDag
   - **RPC URL**: https://relay.awakening.bdagscan.com
   - **Chain ID**: 1043
   - **Para Birimi Sembolü**: BDAG

### Geliştirme Ortamı
- Solidity ile akıllı sözleşme geliştirme
- Hardhat ve Foundry desteği
- Web3.js ve ethers.js kütüphaneleri ile uyumlu
- Next.js ile frontend geliştirme

---

## 🎯 Özet

BlockDAG, modern blockchain geliştirme için kapsamlı bir ekosistem sunar:
- ✅ EVM uyumlu akıllı sözleşme geliştirme
- ✅ Yüksek performanslı DAG mimarisi
- ✅ Kapsamlı geliştirici araçları
- ✅ Testnet üzerinde risksiz test imkanı
- ✅ Detaylı dokümantasyon ve rehberler

---

**Son Güncelleme**: 2025
**Kaynak**: [BlockDAG Official Documentation](https://docs.blockdagnetwork.io/)

