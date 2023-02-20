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
    - [Elasticsearch 시스템 구조](#elasticsearch-%EC%8B%9C%EC%8A%A4%ED%85%9C-%EA%B5%AC%EC%A1%B0)
    - [Elasticsearch 데이터 처리](#elasticsearch-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%B2%98%EB%A6%AC)
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

## Elasticsearch 시작하기

## Elasticsearch 시스템 구조

## Elasticsearch 데이터 처리

## 검색과 쿼리 - Query DSL

## 데이터 색인과 텍스트 분석

## 인덱스 설정과 매핑 - Setting & Mappings

## 집계 - Aggregations