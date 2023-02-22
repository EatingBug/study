# Elasticsearch
<!-- TOC -->

- [Elasticsearch](#elasticsearch)
    - [서문](#%EC%84%9C%EB%AC%B8)
        - [Elastic Stack](#elastic-stack)
        - [Elasticsearch](#elasticsearch)
        - [Logstash](#logstash)
            - [데이터 처리 과정](#%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%B2%98%EB%A6%AC-%EA%B3%BC%EC%A0%95)
        - [Kibana](#kibana)
            - [기본 기능](#%EA%B8%B0%EB%B3%B8-%EA%B8%B0%EB%8A%A5)
    - [Elasticsearch 시작하기](#elasticsearch-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0)
        - [환경설정](#%ED%99%98%EA%B2%BD%EC%84%A4%EC%A0%95)
    - [Elasticsearch 시스템 구조](#elasticsearch-%EC%8B%9C%EC%8A%A4%ED%85%9C-%EA%B5%AC%EC%A1%B0)
        - [클러스터 구성](#%ED%81%B4%EB%9F%AC%EC%8A%A4%ED%84%B0-%EA%B5%AC%EC%84%B1)
        - [디스커버리](#%EB%94%94%EC%8A%A4%EC%BB%A4%EB%B2%84%EB%A6%AC)
        - [Index & Shards](#index--shards)
            - [Primary Shard 와 Replica](#primary-shard-%EC%99%80-replica)
        - [마스터 노드와 데이터 노드](#%EB%A7%88%EC%8A%A4%ED%84%B0-%EB%85%B8%EB%93%9C%EC%99%80-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EB%85%B8%EB%93%9C)
            - [마스터 노드](#%EB%A7%88%EC%8A%A4%ED%84%B0-%EB%85%B8%EB%93%9C)
            - [데이터 노드](#%EB%8D%B0%EC%9D%B4%ED%84%B0-%EB%85%B8%EB%93%9C)
    - [Elasticsearch 데이터 처리](#elasticsearch-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%B2%98%EB%A6%AC)
        - [REST API](#rest-api)
            - [Kibana Dev Tools](#kibana-dev-tools)
        - [CRUD](#crud)
        - [bulk API](#bulk-api)
        - [search API](#search-api)
    - [검색과 쿼리 - Query DSL](#%EA%B2%80%EC%83%89%EA%B3%BC-%EC%BF%BC%EB%A6%AC---query-dsl)
    - [데이터 색인과 텍스트 분석](#%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%83%89%EC%9D%B8%EA%B3%BC-%ED%85%8D%EC%8A%A4%ED%8A%B8-%EB%B6%84%EC%84%9D)
    - [인덱스 설정과 매핑 - Setting & Mappings](#%EC%9D%B8%EB%8D%B1%EC%8A%A4-%EC%84%A4%EC%A0%95%EA%B3%BC-%EB%A7%A4%ED%95%91---setting--mappings)
    - [집계 - Aggregations](#%EC%A7%91%EA%B3%84---aggregations)

<!-- /TOC -->
<br>

## 서문

### Elastic Stack

> ELK Stack (Elasticsearch, Logstash, Kibana) 의 제품명을 대신하여 `Elastic Stack` 이라는 명칭 사용

### Elasticsearch

> 모든 데이터를 색인하여 저장하고 검색, 집계 등을 수행하며 결과를 클라이언트 또는 다른 프로그램으로 전달

- 뛰어난 검색 능력과 대규모 분산 시스템을 구축할 수 있는 다양한 기능을 제공
- 다양한 정확도 알고리즘, 실시간 분석 등의 구현이 가능
- 멀티테넌시 (Multitenancy)
    - 데이터들을 인덱스라는 논리적인 집합 단위로 구성하며, 서로 다른 저장소에 분산되어 저장된다.

### Logstash

> 다양한 데이터 수집과 저장을 위해 개발된 프로젝트.

#### 데이터 처리 과정

1. 입력
    - 입력 기능에서 다양한 데이터 저장소로부터 데이터 입력
2. 필터
    - 필터 기능을 통해 데이터를 확장, 변경, 필터링 및 삭제 등의 처리를 통해 가공
3. 출력
    - 출력 기능을 통해 다양한 데이터 저장소로 데이터를 전송

### Kibana

> Elasticsearch 를 가장 쉽게 시각화할 수 있는 데이터 시각화 도구

- 검색, 그리고 aggregation 의 집계 기능을 이용해 Elasticsearch 로 부터 문서, 집계 결과를 불러와 웹 도구로 시각화한다.

#### 기본 기능

1. Discover
    - Elasticsearch 에 색인된 소스 데이터들의 검색을 위한 메뉴
2. Visualize
    - aggregation 집계 기능을 통해 조회된 데이터의 통계를 다양한 차트로 표현할 수 있는 패널을 만드는 메뉴
3. Dashboard
    - Visualize 메뉴에서 만들어진 시각화 도구들을 조합해서 대시보드 화면을 만들고 저장, 불러오기 등을 할 수 있는 메뉴

<br>

## Elasticsearch 시작하기

### 환경설정

- jvm.options
    - JVM 관련 설정 가능
- elasticsearch.yml
- -E 커맨드 라인을 이용한 설정
    - yml 과 -E 둘다 있는 경우 -E 옵션이 우선으로 설정된다.

<br>

## Elasticsearch 시스템 구조

> Elasticsearch 는 대용량 데이터의 증가에 따른 스케일 아웃과 데이터 무결성을 유지하기 위한 클러스터링을 지원한다. 항상 클러스터를 기본으로 동작을 하며, 1개의 노드만 있어도 클러스터로 구성된다.

<br>

### 클러스터 구성

<img src="https://1535112035-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-Ln04DaYZaDjdiR_ZsKo%2F-LnUvu8iUqn07h_vY2sX%2F-LnEXJ5Avdp4mVjPeH2b%2Fimage.png?alt=media&token=447df06c-a4d5-4330-81cb-2e71804db02a" width="80%">

- 노드들은 클라이언트와의 통신을 위한 `http 포트`, 노드 간의 데이터 교환을 위한 `tcp 포트` 총 2개의 네트워크 통신을 열어두고 있다.
- 1개의 물리 서버마다 하나의 노드를 실행하는 것을 권장
    - **여러 노드가 하나의 클러스터로 묶이기 위해서는 클러스터명 `cluster.name` 설정이 묶여질 노드들 모두 동일해야 한다.**
        - 동일하지 않으면 별개 시스템으로 인식
    - 같은 클러스터로 묶여있어야 노드 간의 데이터 교환이 가능

<br>

### 디스커버리

> 노드가 처음 실행 될 때 같은 서버, 또는 `discovery.seed_hosts: []` 에 설정된 네트워크 상의 다른 노드들을 찾아 하나의 클러스터로 바인딩 하는 과정

<img src="https://1535112035-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-Ln04DaYZaDjdiR_ZsKo%2F-LnVEF1ED-x6P43UYEm-%2F-LnKbiLZhJ4PDthfVOko%2Fimage.png?alt=media&token=989ba2aa-5129-43db-b746-6738b6a121c1" width="70%">

<br>

### Index & Shards

> 단일 데이터 단위를 `document` 라고 하며, 이 document 를 모아놓은 집합을 `Index` 라고 한다.

<img src="https://1535112035-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-Ln04DaYZaDjdiR_ZsKo%2F-LnUxLhQtL_hJwYydM_5%2F-LnKhezUmymEBwLJzfzt%2Fimage.png?alt=media&token=7bf94c91-342c-45c3-9e52-2320e19c667c" width="100%">

- 인덱스는 기본적으로 `Shard` 라는 단위로 분리되고 각 노드에 분산되어 저장된다.

<br>

#### Primary Shard 와 Replica

> 클러스터에 노드를 추가하게 되면 샤드들이 각 노드들로 분산되고 디폴트로 1개의 복제본을 생성한다. 처음 생성된 샤드를 `Primary Shard`, 복제본은 `Replica` 라고 한다.

<img src="https://1535112035-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-Ln04DaYZaDjdiR_ZsKo%2F-LnUxLhQtL_hJwYydM_5%2F-LnKhmx31SnLDNMKr_YT%2Fimage.png?alt=media&token=fc99a84d-5f9f-4d3d-aad6-21e503567b33" width="100%">

- but, 노드가 1개만 있는 경우 Primary Shard 만 존재하고, 복제본은 생성되지 않는다.
    - 아무리 작은 클러스터라도 데이터 가용성과 무결성을 위해 최소 3개의 노드로 구성할 것을 권장한다.
- Primary Shard 가 유실된 경우, 새로 생성되는 것이 아니라 남아있던 복제본이 Primary Shard 로 승격이 되고 다른 노드에 새로 복제본을 생성한다.

<br>

### 마스터 노드와 데이터 노드
#### 마스터 노드
> 클러스터는 하나 이상의 노드들로 이루어진다. 이 중 하나의 노드는 인덱스의 메타 데이터, 샤드의 위치와 같은 클러스터 상태 정보를 관리하는 `마스터 노드` 역할을 수행한다.

- 클러스터마다 하나의 마스터 노드가 존재하며, 마스터 노드의 역할을 수행할 수 있는 노드가 없다면 클러스터는 작동이 정지된다.

<br>

#### 데이터 노드
> 데이터 노드는 실제로 색인된 데이터를 저장하고 있는 노드

- 클러스터에서 마스터 노드와 데이터 노드를 분리하여 설정 할 때 마스터 후보 노드들은 `node.data: false` 로 설정하여 마스터 노드 역할만 수행하고 데이터는 저장하지 않도록 할 수 있다.
    - 이렇게 하면 마스터 노드는 데이터는 저장하지 않고 클러스터 관리만 하게 되고, 데이터 노드는 클러스터 관리 작업으로부터 자유롭게 되어 데이터 처리에만 집중

<br>

## Elasticsearch 데이터 처리

> 데이터 저장 형식으로 JSON 을 사용한다. 저장 형식 뿐 아니라 쿼리와 클러스터 설정 등 모든 정보를 JSON 형태로 주고 받는다.

### REST API

> Elasticsearch 는 http 프로토콜로 접근이 가능한 REST API 를 지원한다. 자원별로 고유 URL 로 접근이 가능하며, HTTP 메서드를 이용해서 자원을 처리한다.

- 유닉스 기반 운영체제에서는 `curl` 명령어로 간편하게 REST API 사용 가능
```sh
GET 메서드로 elasticsearch 클러스터 조회
$ curl -XGET "http://localhost:9200"
{
  "name" : "Jongminui-MacBook-Pro.local",
  "cluster_name" : "elasticsearch",
  "cluster_uuid" : "hpmT8TPiR1Kk69YNao9V3w",
  "version" : {
    "number" : "7.3.0",
    "build_flavor" : "default",
    "build_type" : "tar",
    "build_hash" : "de777fa",
    "build_date" : "2019-07-24T18:30:11.767338Z",
    "build_snapshot" : false,
    "lucene_version" : "8.1.0",
    "minimum_wire_compatibility_version" : "6.8.0",
    "minimum_index_compatibility_version" : "6.0.0-beta1"
  },
  "tagline" : "You Know, for Search"
}
```

<br>

#### Kibana Dev Tools

> Rest API 를 쉽게 사용하기 위해서는 포스트맨 같은 도구를 사용할 수 있다. Kibana 에서는 elasticsearch 에서 간편하게 설치할 수 있는 Dev Tools 도구를 제공한다.

### CRUD

### bulk API

### search API

## 검색과 쿼리 - Query DSL

## 데이터 색인과 텍스트 분석

## 인덱스 설정과 매핑 - Setting & Mappings

## 집계 - Aggregations