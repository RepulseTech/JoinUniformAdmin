/* eslint-disable */
import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  ConnectionCursor: string;
  DateTime: Date;
  JSON: any;
};

export type AddCategoriesToEntryInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddCategoryUsersToCategoryInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddQuestionsToSubjectInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddQuestionsToSubjectTopicInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddSubEntriesToEntryInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddTagsToQuestionInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddTopicsToSubjectInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddVideosToCategoryInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type Announcement = {
  /** The end DOB of eligible user */
  ageEndDate: Scalars['DateTime'];
  /** The start DOB of eligible user */
  ageStartDate: Scalars['DateTime'];
  applicationEndDate: Scalars['DateTime'];
  applicationStartDate: Scalars['DateTime'];
  content: Scalars['String'];
  created: Scalars['DateTime'];
  educationQualification: Scalars['String'];
  entry: Maybe<Entry>;
  examEndDate: Scalars['DateTime'];
  examStartDate: Scalars['DateTime'];
  expiry: Scalars['DateTime'];
  id: Scalars['ID'];
  location: Scalars['String'];
  officialURL: Scalars['String'];
  qualificationDescription: Scalars['String'];
  title: Scalars['String'];
  type: Scalars['String'];
  updated: Scalars['DateTime'];
};

export type AnnouncementAggregateGroupBy = {
  content: Maybe<Scalars['String']>;
  educationQualification: Maybe<Scalars['String']>;
  expiry: Maybe<Scalars['DateTime']>;
  id: Maybe<Scalars['ID']>;
  location: Maybe<Scalars['String']>;
  officialURL: Maybe<Scalars['String']>;
  qualificationDescription: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
};

export type AnnouncementConnection = {
  /** Array of edges. */
  edges: Array<AnnouncementEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type AnnouncementCountAggregate = {
  content: Maybe<Scalars['Int']>;
  educationQualification: Maybe<Scalars['Int']>;
  expiry: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
  location: Maybe<Scalars['Int']>;
  officialURL: Maybe<Scalars['Int']>;
  qualificationDescription: Maybe<Scalars['Int']>;
  title: Maybe<Scalars['Int']>;
  type: Maybe<Scalars['Int']>;
};

export type AnnouncementDeleteFilter = {
  and: InputMaybe<Array<AnnouncementDeleteFilter>>;
  content: InputMaybe<StringFieldComparison>;
  educationQualification: InputMaybe<StringFieldComparison>;
  expiry: InputMaybe<DateFieldComparison>;
  id: InputMaybe<IdFilterComparison>;
  location: InputMaybe<StringFieldComparison>;
  officialURL: InputMaybe<StringFieldComparison>;
  or: InputMaybe<Array<AnnouncementDeleteFilter>>;
  qualificationDescription: InputMaybe<StringFieldComparison>;
  title: InputMaybe<StringFieldComparison>;
  type: InputMaybe<StringFieldComparison>;
};

export type AnnouncementDeleteResponse = {
  /** The end DOB of eligible user */
  ageEndDate: Maybe<Scalars['DateTime']>;
  /** The start DOB of eligible user */
  ageStartDate: Maybe<Scalars['DateTime']>;
  applicationEndDate: Maybe<Scalars['DateTime']>;
  applicationStartDate: Maybe<Scalars['DateTime']>;
  content: Maybe<Scalars['String']>;
  created: Maybe<Scalars['DateTime']>;
  educationQualification: Maybe<Scalars['String']>;
  examEndDate: Maybe<Scalars['DateTime']>;
  examStartDate: Maybe<Scalars['DateTime']>;
  expiry: Maybe<Scalars['DateTime']>;
  id: Maybe<Scalars['ID']>;
  location: Maybe<Scalars['String']>;
  officialURL: Maybe<Scalars['String']>;
  qualificationDescription: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
  updated: Maybe<Scalars['DateTime']>;
};

export type AnnouncementEdge = {
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the Announcement */
  node: Announcement;
};

export type AnnouncementFilter = {
  and: InputMaybe<Array<AnnouncementFilter>>;
  content: InputMaybe<StringFieldComparison>;
  educationQualification: InputMaybe<StringFieldComparison>;
  entry: InputMaybe<AnnouncementFilterEntryFilter>;
  expiry: InputMaybe<DateFieldComparison>;
  id: InputMaybe<IdFilterComparison>;
  location: InputMaybe<StringFieldComparison>;
  officialURL: InputMaybe<StringFieldComparison>;
  or: InputMaybe<Array<AnnouncementFilter>>;
  qualificationDescription: InputMaybe<StringFieldComparison>;
  title: InputMaybe<StringFieldComparison>;
  type: InputMaybe<StringFieldComparison>;
};

export type AnnouncementFilterEntryFilter = {
  and: InputMaybe<Array<AnnouncementFilterEntryFilter>>;
  id: InputMaybe<IdFilterComparison>;
  name: InputMaybe<StringFieldComparison>;
  or: InputMaybe<Array<AnnouncementFilterEntryFilter>>;
  parentId: InputMaybe<IdFilterComparison>;
};

export type AnnouncementInput = {
  /** The end DOB of eligible user */
  ageEndDate: Scalars['DateTime'];
  /** The start DOB of eligible user */
  ageStartDate: Scalars['DateTime'];
  applicationEndDate: Scalars['DateTime'];
  applicationStartDate: Scalars['DateTime'];
  content: Scalars['String'];
  educationQualification: Scalars['String'];
  entryId: Scalars['ID'];
  examEndDate: Scalars['DateTime'];
  examStartDate: Scalars['DateTime'];
  expiry: Scalars['DateTime'];
  location: Scalars['String'];
  officialURL: Scalars['String'];
  qualificationDescription: Scalars['String'];
  title: Scalars['String'];
  type: Scalars['String'];
};

export type AnnouncementMaxAggregate = {
  content: Maybe<Scalars['String']>;
  educationQualification: Maybe<Scalars['String']>;
  expiry: Maybe<Scalars['DateTime']>;
  id: Maybe<Scalars['ID']>;
  location: Maybe<Scalars['String']>;
  officialURL: Maybe<Scalars['String']>;
  qualificationDescription: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
};

export type AnnouncementMinAggregate = {
  content: Maybe<Scalars['String']>;
  educationQualification: Maybe<Scalars['String']>;
  expiry: Maybe<Scalars['DateTime']>;
  id: Maybe<Scalars['ID']>;
  location: Maybe<Scalars['String']>;
  officialURL: Maybe<Scalars['String']>;
  qualificationDescription: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
};

export type AnnouncementSort = {
  direction: SortDirection;
  field: AnnouncementSortFields;
  nulls: InputMaybe<SortNulls>;
};

export enum AnnouncementSortFields {
  Content = 'content',
  EducationQualification = 'educationQualification',
  Expiry = 'expiry',
  Id = 'id',
  Location = 'location',
  OfficialUrl = 'officialURL',
  QualificationDescription = 'qualificationDescription',
  Title = 'title',
  Type = 'type'
}

export type AnnouncementUpdateFilter = {
  and: InputMaybe<Array<AnnouncementUpdateFilter>>;
  content: InputMaybe<StringFieldComparison>;
  educationQualification: InputMaybe<StringFieldComparison>;
  expiry: InputMaybe<DateFieldComparison>;
  id: InputMaybe<IdFilterComparison>;
  location: InputMaybe<StringFieldComparison>;
  officialURL: InputMaybe<StringFieldComparison>;
  or: InputMaybe<Array<AnnouncementUpdateFilter>>;
  qualificationDescription: InputMaybe<StringFieldComparison>;
  title: InputMaybe<StringFieldComparison>;
  type: InputMaybe<StringFieldComparison>;
};

export type Article = {
  content: Scalars['String'];
  created: Scalars['DateTime'];
  id: Scalars['ID'];
  title: Scalars['String'];
  updated: Scalars['DateTime'];
};

export type ArticleAggregateGroupBy = {
  content: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
  title: Maybe<Scalars['String']>;
};

export type ArticleConnection = {
  /** Array of edges. */
  edges: Array<ArticleEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type ArticleCountAggregate = {
  content: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
  title: Maybe<Scalars['Int']>;
};

export type ArticleDeleteFilter = {
  and: InputMaybe<Array<ArticleDeleteFilter>>;
  content: InputMaybe<StringFieldComparison>;
  id: InputMaybe<IdFilterComparison>;
  or: InputMaybe<Array<ArticleDeleteFilter>>;
  title: InputMaybe<StringFieldComparison>;
};

export type ArticleDeleteResponse = {
  content: Maybe<Scalars['String']>;
  created: Maybe<Scalars['DateTime']>;
  id: Maybe<Scalars['ID']>;
  title: Maybe<Scalars['String']>;
  updated: Maybe<Scalars['DateTime']>;
};

export type ArticleEdge = {
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the Article */
  node: Article;
};

export type ArticleFilter = {
  and: InputMaybe<Array<ArticleFilter>>;
  content: InputMaybe<StringFieldComparison>;
  id: InputMaybe<IdFilterComparison>;
  or: InputMaybe<Array<ArticleFilter>>;
  title: InputMaybe<StringFieldComparison>;
};

export type ArticleInput = {
  content: Scalars['String'];
  title: Scalars['String'];
};

export type ArticleMaxAggregate = {
  content: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
  title: Maybe<Scalars['String']>;
};

export type ArticleMinAggregate = {
  content: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
  title: Maybe<Scalars['String']>;
};

export type ArticleSort = {
  direction: SortDirection;
  field: ArticleSortFields;
  nulls: InputMaybe<SortNulls>;
};

export enum ArticleSortFields {
  Content = 'content',
  Id = 'id',
  Title = 'title'
}

export type ArticleUpdateFilter = {
  and: InputMaybe<Array<ArticleUpdateFilter>>;
  content: InputMaybe<StringFieldComparison>;
  id: InputMaybe<IdFilterComparison>;
  or: InputMaybe<Array<ArticleUpdateFilter>>;
  title: InputMaybe<StringFieldComparison>;
};

export type Category = {
  categoryUsers: CategoryCategoryUsersConnection;
  created: Scalars['DateTime'];
  disabled: Maybe<Scalars['DateTime']>;
  education: Scalars['String'];
  entry: Entry;
  examPackTemplate: Maybe<ExamPackTemplate>;
  id: Scalars['ID'];
  name: Scalars['String'];
  syllabus: Maybe<Scalars['String']>;
  updated: Scalars['DateTime'];
  videos: CategoryVideosConnection;
};


export type CategoryCategoryUsersArgs = {
  filter?: InputMaybe<CategoryUserFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<CategoryUserSort>>;
};


export type CategoryVideosArgs = {
  filter?: InputMaybe<VideoFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<VideoSort>>;
};

export type CategoryAggregateGroupBy = {
  disabled: Maybe<Scalars['DateTime']>;
  education: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
  name: Maybe<Scalars['String']>;
};

export type CategoryCategoryUsersConnection = {
  /** Array of edges. */
  edges: Array<CategoryUserEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type CategoryConnection = {
  /** Array of edges. */
  edges: Array<CategoryEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type CategoryCountAggregate = {
  disabled: Maybe<Scalars['Int']>;
  education: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
  name: Maybe<Scalars['Int']>;
};

export type CategoryDeleteFilter = {
  and: InputMaybe<Array<CategoryDeleteFilter>>;
  disabled: InputMaybe<DateFieldComparison>;
  education: InputMaybe<StringFieldComparison>;
  id: InputMaybe<IdFilterComparison>;
  name: InputMaybe<StringFieldComparison>;
  or: InputMaybe<Array<CategoryDeleteFilter>>;
};

export type CategoryDeleteResponse = {
  created: Maybe<Scalars['DateTime']>;
  disabled: Maybe<Scalars['DateTime']>;
  education: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
  name: Maybe<Scalars['String']>;
  syllabus: Maybe<Scalars['String']>;
  updated: Maybe<Scalars['DateTime']>;
};

export type CategoryEdge = {
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the Category */
  node: Category;
};

export type CategoryFilter = {
  and: InputMaybe<Array<CategoryFilter>>;
  categoryUsers: InputMaybe<CategoryFilterCategoryUserFilter>;
  disabled: InputMaybe<DateFieldComparison>;
  education: InputMaybe<StringFieldComparison>;
  entry: InputMaybe<CategoryFilterEntryFilter>;
  examPackTemplate: InputMaybe<CategoryFilterExamPackTemplateFilter>;
  id: InputMaybe<IdFilterComparison>;
  name: InputMaybe<StringFieldComparison>;
  or: InputMaybe<Array<CategoryFilter>>;
  videos: InputMaybe<CategoryFilterVideoFilter>;
};

export type CategoryFilterCategoryUserFilter = {
  and: InputMaybe<Array<CategoryFilterCategoryUserFilter>>;
  id: InputMaybe<IdFilterComparison>;
  or: InputMaybe<Array<CategoryFilterCategoryUserFilter>>;
  userId: InputMaybe<IdFilterComparison>;
};

export type CategoryFilterEntryFilter = {
  and: InputMaybe<Array<CategoryFilterEntryFilter>>;
  id: InputMaybe<IdFilterComparison>;
  name: InputMaybe<StringFieldComparison>;
  or: InputMaybe<Array<CategoryFilterEntryFilter>>;
  parentId: InputMaybe<IdFilterComparison>;
};

export type CategoryFilterExamPackTemplateFilter = {
  and: InputMaybe<Array<CategoryFilterExamPackTemplateFilter>>;
  id: InputMaybe<IdFilterComparison>;
  or: InputMaybe<Array<CategoryFilterExamPackTemplateFilter>>;
};

export type CategoryFilterVideoFilter = {
  URL: InputMaybe<StringFieldComparison>;
  and: InputMaybe<Array<CategoryFilterVideoFilter>>;
  id: InputMaybe<IdFilterComparison>;
  or: InputMaybe<Array<CategoryFilterVideoFilter>>;
  remarks: InputMaybe<StringFieldComparison>;
  title: InputMaybe<StringFieldComparison>;
};

export type CategoryInput = {
  education: Scalars['String'];
  entryId: Scalars['ID'];
  name: Scalars['String'];
  syllabus: InputMaybe<Scalars['String']>;
};

export type CategoryMaxAggregate = {
  disabled: Maybe<Scalars['DateTime']>;
  education: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
  name: Maybe<Scalars['String']>;
};

export type CategoryMinAggregate = {
  disabled: Maybe<Scalars['DateTime']>;
  education: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
  name: Maybe<Scalars['String']>;
};

export type CategorySort = {
  direction: SortDirection;
  field: CategorySortFields;
  nulls: InputMaybe<SortNulls>;
};

export enum CategorySortFields {
  Disabled = 'disabled',
  Education = 'education',
  Id = 'id',
  Name = 'name'
}

export type CategoryUpdateFilter = {
  and: InputMaybe<Array<CategoryUpdateFilter>>;
  disabled: InputMaybe<DateFieldComparison>;
  education: InputMaybe<StringFieldComparison>;
  id: InputMaybe<IdFilterComparison>;
  name: InputMaybe<StringFieldComparison>;
  or: InputMaybe<Array<CategoryUpdateFilter>>;
};

export type CategoryUser = {
  category: Category;
  created: Scalars['DateTime'];
  id: Scalars['ID'];
  updated: Scalars['DateTime'];
  user: User;
  userId: Scalars['ID'];
};

export type CategoryUserAggregateGroupBy = {
  id: Maybe<Scalars['ID']>;
  userId: Maybe<Scalars['ID']>;
};

export type CategoryUserConnection = {
  /** Array of edges. */
  edges: Array<CategoryUserEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type CategoryUserCountAggregate = {
  id: Maybe<Scalars['Int']>;
  userId: Maybe<Scalars['Int']>;
};

export type CategoryUserDeleteFilter = {
  and: InputMaybe<Array<CategoryUserDeleteFilter>>;
  id: InputMaybe<IdFilterComparison>;
  or: InputMaybe<Array<CategoryUserDeleteFilter>>;
  userId: InputMaybe<IdFilterComparison>;
};

export type CategoryUserDeleteResponse = {
  created: Maybe<Scalars['DateTime']>;
  id: Maybe<Scalars['ID']>;
  updated: Maybe<Scalars['DateTime']>;
  userId: Maybe<Scalars['ID']>;
};

export type CategoryUserEdge = {
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the CategoryUser */
  node: CategoryUser;
};

export type CategoryUserFilter = {
  and: InputMaybe<Array<CategoryUserFilter>>;
  category: InputMaybe<CategoryUserFilterCategoryFilter>;
  id: InputMaybe<IdFilterComparison>;
  or: InputMaybe<Array<CategoryUserFilter>>;
  user: InputMaybe<CategoryUserFilterUserFilter>;
  userId: InputMaybe<IdFilterComparison>;
};

export type CategoryUserFilterCategoryFilter = {
  and: InputMaybe<Array<CategoryUserFilterCategoryFilter>>;
  disabled: InputMaybe<DateFieldComparison>;
  education: InputMaybe<StringFieldComparison>;
  id: InputMaybe<IdFilterComparison>;
  name: InputMaybe<StringFieldComparison>;
  or: InputMaybe<Array<CategoryUserFilterCategoryFilter>>;
};

export type CategoryUserFilterUserFilter = {
  and: InputMaybe<Array<CategoryUserFilterUserFilter>>;
  email: InputMaybe<StringFieldComparison>;
  id: InputMaybe<IdFilterComparison>;
  or: InputMaybe<Array<CategoryUserFilterUserFilter>>;
  phone: InputMaybe<StringFieldComparison>;
};

export type CategoryUserInput = {
  categoryId: Scalars['ID'];
};

export type CategoryUserMaxAggregate = {
  id: Maybe<Scalars['ID']>;
  userId: Maybe<Scalars['ID']>;
};

export type CategoryUserMinAggregate = {
  id: Maybe<Scalars['ID']>;
  userId: Maybe<Scalars['ID']>;
};

export type CategoryUserSort = {
  direction: SortDirection;
  field: CategoryUserSortFields;
  nulls: InputMaybe<SortNulls>;
};

export enum CategoryUserSortFields {
  Id = 'id',
  UserId = 'userId'
}

export type CategoryUserUpdateFilter = {
  and: InputMaybe<Array<CategoryUserUpdateFilter>>;
  id: InputMaybe<IdFilterComparison>;
  or: InputMaybe<Array<CategoryUserUpdateFilter>>;
  userId: InputMaybe<IdFilterComparison>;
};

export type CategoryVideosConnection = {
  /** Array of edges. */
  edges: Array<VideoEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type CreateManyAnnouncementsInput = {
  /** Array of records to create */
  announcements: Array<AnnouncementInput>;
};

export type CreateManyArticlesInput = {
  /** Array of records to create */
  articles: Array<ArticleInput>;
};

export type CreateManyCategoriesInput = {
  /** Array of records to create */
  categories: Array<CategoryInput>;
};

export type CreateManyCategoryUsersInput = {
  /** Array of records to create */
  categoryUsers: Array<CategoryUserInput>;
};

export type CreateManyEntriesInput = {
  /** Array of records to create */
  entries: Array<EntryInput>;
};

export type CreateManyExamPackPapersInput = {
  /** Array of records to create */
  examPackPapers: Array<ExamPackPaperInput>;
};

export type CreateManyExamPackTemplatesInput = {
  /** Array of records to create */
  examPackTemplates: Array<ExamPackTemplateInput>;
};

export type CreateManyExamPacksInput = {
  /** Array of records to create */
  examPacks: Array<ExamPackInput>;
};

export type CreateManyQuestionTagsInput = {
  /** Array of records to create */
  questionTags: Array<QuestionTagInput>;
};

export type CreateManyQuestionsInput = {
  /** Array of records to create */
  questions: Array<QuestionInput>;
};

export type CreateManySubjectTopicsInput = {
  /** Array of records to create */
  subjectTopics: Array<SubjectTopicInput>;
};

export type CreateManySubjectsInput = {
  /** Array of records to create */
  subjects: Array<SubjectInput>;
};

export type CreateManyUserExamPackPaperOptionsInput = {
  /** Array of records to create */
  userExamPackPaperOptions: Array<UserExamPackPaperOptionInput>;
};

export type CreateManyUserExamPackPapersInput = {
  /** Array of records to create */
  userExamPackPapers: Array<UserExamPackPaperInput>;
};

export type CreateManyVideosInput = {
  /** Array of records to create */
  videos: Array<VideoInput>;
};

export type CreateOneAnnouncementInput = {
  /** The record to create */
  announcement: AnnouncementInput;
};

export type CreateOneArticleInput = {
  /** The record to create */
  article: ArticleInput;
};

export type CreateOneCategoryInput = {
  /** The record to create */
  category: CategoryInput;
};

export type CreateOneCategoryUserInput = {
  /** The record to create */
  categoryUser: CategoryUserInput;
};

export type CreateOneEntryInput = {
  /** The record to create */
  entry: EntryInput;
};

export type CreateOneExamPackInput = {
  /** The record to create */
  examPack: ExamPackInput;
};

export type CreateOneExamPackPaperInput = {
  /** The record to create */
  examPackPaper: ExamPackPaperInput;
};

export type CreateOneExamPackTemplateInput = {
  /** The record to create */
  examPackTemplate: ExamPackTemplateInput;
};

export type CreateOneQuestionInput = {
  /** The record to create */
  question: QuestionInput;
};

export type CreateOneQuestionTagInput = {
  /** The record to create */
  questionTag: QuestionTagInput;
};

export type CreateOneSubjectInput = {
  /** The record to create */
  subject: SubjectInput;
};

export type CreateOneSubjectTopicInput = {
  /** The record to create */
  subjectTopic: SubjectTopicInput;
};

export type CreateOneUserExamPackPaperInput = {
  /** The record to create */
  userExamPackPaper: UserExamPackPaperInput;
};

export type CreateOneUserExamPackPaperOptionInput = {
  /** The record to create */
  userExamPackPaperOption: UserExamPackPaperOptionInput;
};

export type CreateOneVideoInput = {
  /** The record to create */
  video: VideoInput;
};

export type CursorPaging = {
  /** Paginate after opaque cursor */
  after: InputMaybe<Scalars['ConnectionCursor']>;
  /** Paginate before opaque cursor */
  before: InputMaybe<Scalars['ConnectionCursor']>;
  /** Paginate first */
  first: InputMaybe<Scalars['Int']>;
  /** Paginate last */
  last: InputMaybe<Scalars['Int']>;
};

export type DateFieldComparison = {
  between: InputMaybe<DateFieldComparisonBetween>;
  eq: InputMaybe<Scalars['DateTime']>;
  gt: InputMaybe<Scalars['DateTime']>;
  gte: InputMaybe<Scalars['DateTime']>;
  in: InputMaybe<Array<Scalars['DateTime']>>;
  is: InputMaybe<Scalars['Boolean']>;
  isNot: InputMaybe<Scalars['Boolean']>;
  lt: InputMaybe<Scalars['DateTime']>;
  lte: InputMaybe<Scalars['DateTime']>;
  neq: InputMaybe<Scalars['DateTime']>;
  notBetween: InputMaybe<DateFieldComparisonBetween>;
  notIn: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateFieldComparisonBetween = {
  lower: Scalars['DateTime'];
  upper: Scalars['DateTime'];
};

export type DeleteManyAnnouncementsInput = {
  /** Filter to find records to delete */
  filter: AnnouncementDeleteFilter;
};

export type DeleteManyArticlesInput = {
  /** Filter to find records to delete */
  filter: ArticleDeleteFilter;
};

export type DeleteManyCategoriesInput = {
  /** Filter to find records to delete */
  filter: CategoryDeleteFilter;
};

export type DeleteManyCategoryUsersInput = {
  /** Filter to find records to delete */
  filter: CategoryUserDeleteFilter;
};

export type DeleteManyEntriesInput = {
  /** Filter to find records to delete */
  filter: EntryDeleteFilter;
};

export type DeleteManyExamPackPapersInput = {
  /** Filter to find records to delete */
  filter: ExamPackPaperDeleteFilter;
};

export type DeleteManyExamPackTemplatesInput = {
  /** Filter to find records to delete */
  filter: ExamPackTemplateDeleteFilter;
};

export type DeleteManyExamPacksInput = {
  /** Filter to find records to delete */
  filter: ExamPackDeleteFilter;
};

export type DeleteManyQuestionTagsInput = {
  /** Filter to find records to delete */
  filter: QuestionTagDeleteFilter;
};

export type DeleteManyQuestionsInput = {
  /** Filter to find records to delete */
  filter: QuestionDeleteFilter;
};

export type DeleteManyResponse = {
  /** The number of records deleted. */
  deletedCount: Scalars['Int'];
};

export type DeleteManySubjectTopicsInput = {
  /** Filter to find records to delete */
  filter: SubjectTopicDeleteFilter;
};

export type DeleteManySubjectsInput = {
  /** Filter to find records to delete */
  filter: SubjectDeleteFilter;
};

export type DeleteManyUserExamPackPaperOptionsInput = {
  /** Filter to find records to delete */
  filter: UserExamPackPaperOptionDeleteFilter;
};

export type DeleteManyUserExamPackPapersInput = {
  /** Filter to find records to delete */
  filter: UserExamPackPaperDeleteFilter;
};

export type DeleteManyVideosInput = {
  /** Filter to find records to delete */
  filter: VideoDeleteFilter;
};

export type DeleteOneAnnouncementInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneArticleInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneCategoryInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneCategoryUserInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneEntryInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneExamPackInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneExamPackPaperInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneExamPackTemplateInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneQuestionInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneQuestionTagInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneSubjectInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneSubjectTopicInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneUserExamPackPaperInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneUserExamPackPaperOptionInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneVideoInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type Entry = {
  categories: Array<Category>;
  created: Scalars['DateTime'];
  disabled: Maybe<Scalars['DateTime']>;
  iconUrl: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  parentId: Maybe<Scalars['ID']>;
  subEntries: Array<Entry>;
  updated: Scalars['DateTime'];
};


export type EntryCategoriesArgs = {
  filter?: InputMaybe<CategoryFilter>;
  sorting?: InputMaybe<Array<CategorySort>>;
};


export type EntrySubEntriesArgs = {
  filter?: InputMaybe<EntryFilter>;
  sorting?: InputMaybe<Array<EntrySort>>;
};

export type EntryAggregateGroupBy = {
  id: Maybe<Scalars['ID']>;
  name: Maybe<Scalars['String']>;
  parentId: Maybe<Scalars['ID']>;
};

export type EntryConnection = {
  /** Array of edges. */
  edges: Array<EntryEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type EntryCountAggregate = {
  id: Maybe<Scalars['Int']>;
  name: Maybe<Scalars['Int']>;
  parentId: Maybe<Scalars['Int']>;
};

export type EntryDeleteFilter = {
  and: InputMaybe<Array<EntryDeleteFilter>>;
  id: InputMaybe<IdFilterComparison>;
  name: InputMaybe<StringFieldComparison>;
  or: InputMaybe<Array<EntryDeleteFilter>>;
  parentId: InputMaybe<IdFilterComparison>;
};

export type EntryDeleteResponse = {
  created: Maybe<Scalars['DateTime']>;
  disabled: Maybe<Scalars['DateTime']>;
  iconUrl: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
  name: Maybe<Scalars['String']>;
  parentId: Maybe<Scalars['ID']>;
  updated: Maybe<Scalars['DateTime']>;
};

export type EntryEdge = {
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the Entry */
  node: Entry;
};

export type EntryFilter = {
  and: InputMaybe<Array<EntryFilter>>;
  id: InputMaybe<IdFilterComparison>;
  name: InputMaybe<StringFieldComparison>;
  or: InputMaybe<Array<EntryFilter>>;
  parentId: InputMaybe<IdFilterComparison>;
};

export type EntryInput = {
  icon: UploadFile;
  name: Scalars['String'];
  parentId: InputMaybe<Scalars['String']>;
};

export type EntryMaxAggregate = {
  id: Maybe<Scalars['ID']>;
  name: Maybe<Scalars['String']>;
  parentId: Maybe<Scalars['ID']>;
};

export type EntryMinAggregate = {
  id: Maybe<Scalars['ID']>;
  name: Maybe<Scalars['String']>;
  parentId: Maybe<Scalars['ID']>;
};

export type EntrySort = {
  direction: SortDirection;
  field: EntrySortFields;
  nulls: InputMaybe<SortNulls>;
};

export enum EntrySortFields {
  Id = 'id',
  Name = 'name',
  ParentId = 'parentId'
}

export type EntryUpdateFilter = {
  and: InputMaybe<Array<EntryUpdateFilter>>;
  id: InputMaybe<IdFilterComparison>;
  name: InputMaybe<StringFieldComparison>;
  or: InputMaybe<Array<EntryUpdateFilter>>;
  parentId: InputMaybe<IdFilterComparison>;
};

export type ExamPack = {
  category: Category;
  created: Scalars['DateTime'];
  disabled: Maybe<Scalars['DateTime']>;
  discount: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  logoUrl: Scalars['String'];
  paymentType: PaymentType;
  price: Maybe<Scalars['Float']>;
  subTitle: Maybe<Scalars['String']>;
  testType: Scalars['String'];
  title: Scalars['String'];
  updated: Scalars['DateTime'];
};

export type ExamPackAggregateGroupBy = {
  id: Maybe<Scalars['ID']>;
};

export type ExamPackConnection = {
  /** Array of edges. */
  edges: Array<ExamPackEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type ExamPackCountAggregate = {
  id: Maybe<Scalars['Int']>;
};

export type ExamPackDeleteFilter = {
  and: InputMaybe<Array<ExamPackDeleteFilter>>;
  id: InputMaybe<IdFilterComparison>;
  or: InputMaybe<Array<ExamPackDeleteFilter>>;
};

export type ExamPackDeleteResponse = {
  created: Maybe<Scalars['DateTime']>;
  disabled: Maybe<Scalars['DateTime']>;
  discount: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['ID']>;
  logoUrl: Maybe<Scalars['String']>;
  paymentType: Maybe<PaymentType>;
  price: Maybe<Scalars['Float']>;
  subTitle: Maybe<Scalars['String']>;
  testType: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
  updated: Maybe<Scalars['DateTime']>;
};

export type ExamPackEdge = {
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the ExamPack */
  node: ExamPack;
};

export type ExamPackFilter = {
  and: InputMaybe<Array<ExamPackFilter>>;
  category: InputMaybe<ExamPackFilterCategoryFilter>;
  id: InputMaybe<IdFilterComparison>;
  or: InputMaybe<Array<ExamPackFilter>>;
};

export type ExamPackFilterCategoryFilter = {
  and: InputMaybe<Array<ExamPackFilterCategoryFilter>>;
  disabled: InputMaybe<DateFieldComparison>;
  education: InputMaybe<StringFieldComparison>;
  id: InputMaybe<IdFilterComparison>;
  name: InputMaybe<StringFieldComparison>;
  or: InputMaybe<Array<ExamPackFilterCategoryFilter>>;
};

export type ExamPackInput = {
  categoryId: Scalars['ID'];
  discount: InputMaybe<Scalars['Float']>;
  logoUrl: Scalars['String'];
  paymentType: PaymentType;
  price: InputMaybe<Scalars['Float']>;
  subTitle: InputMaybe<Scalars['String']>;
  testType: Scalars['String'];
  title: Scalars['String'];
};

export type ExamPackMaxAggregate = {
  id: Maybe<Scalars['ID']>;
};

export type ExamPackMinAggregate = {
  id: Maybe<Scalars['ID']>;
};

export type ExamPackPaper = {
  created: Scalars['DateTime'];
  disabled: Maybe<Scalars['DateTime']>;
  discount: Maybe<Scalars['Float']>;
  examPack: ExamPack;
  id: Scalars['ID'];
  parts: Array<ExamPackPaperPart>;
  paymentType: PaymentType;
  price: Maybe<Scalars['Float']>;
  title: Scalars['String'];
  updated: Scalars['DateTime'];
};

export type ExamPackPaperAggregateGroupBy = {
  id: Maybe<Scalars['ID']>;
};

export type ExamPackPaperConnection = {
  /** Array of edges. */
  edges: Array<ExamPackPaperEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type ExamPackPaperCountAggregate = {
  id: Maybe<Scalars['Int']>;
};

export type ExamPackPaperDeleteFilter = {
  and: InputMaybe<Array<ExamPackPaperDeleteFilter>>;
  id: InputMaybe<IdFilterComparison>;
  or: InputMaybe<Array<ExamPackPaperDeleteFilter>>;
};

export type ExamPackPaperDeleteResponse = {
  created: Maybe<Scalars['DateTime']>;
  disabled: Maybe<Scalars['DateTime']>;
  discount: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['ID']>;
  parts: Maybe<Array<ExamPackPaperPart>>;
  paymentType: Maybe<PaymentType>;
  price: Maybe<Scalars['Float']>;
  title: Maybe<Scalars['String']>;
  updated: Maybe<Scalars['DateTime']>;
};

export type ExamPackPaperEdge = {
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the ExamPackPaper */
  node: ExamPackPaper;
};

export type ExamPackPaperFilter = {
  and: InputMaybe<Array<ExamPackPaperFilter>>;
  examPack: InputMaybe<ExamPackPaperFilterExamPackFilter>;
  id: InputMaybe<IdFilterComparison>;
  or: InputMaybe<Array<ExamPackPaperFilter>>;
};

export type ExamPackPaperFilterExamPackFilter = {
  and: InputMaybe<Array<ExamPackPaperFilterExamPackFilter>>;
  id: InputMaybe<IdFilterComparison>;
  or: InputMaybe<Array<ExamPackPaperFilterExamPackFilter>>;
};

export type ExamPackPaperInput = {
  discount: InputMaybe<Scalars['Float']>;
  examPackId: Scalars['ID'];
  parts: Array<ExamPackPaperPartInput>;
  paymentType: PaymentType;
  price: InputMaybe<Scalars['Float']>;
  title: Scalars['String'];
};

export type ExamPackPaperMaxAggregate = {
  id: Maybe<Scalars['ID']>;
};

export type ExamPackPaperMinAggregate = {
  id: Maybe<Scalars['ID']>;
};

export type ExamPackPaperPart = {
  correctMarks: Scalars['Float'];
  passMarks: Scalars['Float'];
  sections: Array<ExamPackPaperPartSection>;
  totalMarks: Scalars['Float'];
  totalQuestions: Scalars['Float'];
  totalTime: Scalars['Float'];
  wrongMarks: Scalars['Float'];
};

export type ExamPackPaperPartInput = {
  correctMarks: Scalars['Float'];
  passMarks: Scalars['Float'];
  sections: Array<ExamPackPaperPartSectionInput>;
  totalMarks: Scalars['Float'];
  totalQuestions: Scalars['Float'];
  totalTime: Scalars['Float'];
  wrongMarks: Scalars['Float'];
};

export type ExamPackPaperPartSection = {
  levels: Array<ExamPackPaperPartSectionLevel>;
  subjectId: Scalars['ID'];
  totalMarks: Scalars['Float'];
  totalQuestions: Scalars['Float'];
};

export type ExamPackPaperPartSectionInput = {
  levels: Array<ExamPackPaperPartSectionLevelInput>;
  subjectId: Scalars['ID'];
  totalMarks: Scalars['Float'];
  totalQuestions: Scalars['Float'];
};

export type ExamPackPaperPartSectionLevel = {
  questionIds: Array<Scalars['ID']>;
  value: Level;
};

export type ExamPackPaperPartSectionLevelInput = {
  questionIds: Array<Scalars['ID']>;
  value: Level;
};

export type ExamPackPaperSort = {
  direction: SortDirection;
  field: ExamPackPaperSortFields;
  nulls: InputMaybe<SortNulls>;
};

export enum ExamPackPaperSortFields {
  Id = 'id'
}

export type ExamPackPaperUpdateFilter = {
  and: InputMaybe<Array<ExamPackPaperUpdateFilter>>;
  id: InputMaybe<IdFilterComparison>;
  or: InputMaybe<Array<ExamPackPaperUpdateFilter>>;
};

export type ExamPackSort = {
  direction: SortDirection;
  field: ExamPackSortFields;
  nulls: InputMaybe<SortNulls>;
};

export enum ExamPackSortFields {
  Id = 'id'
}

export type ExamPackTemplate = {
  category: Category;
  created: Scalars['DateTime'];
  disabled: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  parts: Array<ExamPackTemplatePart>;
  updated: Scalars['DateTime'];
};

export type ExamPackTemplateAggregateGroupBy = {
  id: Maybe<Scalars['ID']>;
};

export type ExamPackTemplateConnection = {
  /** Array of edges. */
  edges: Array<ExamPackTemplateEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type ExamPackTemplateCountAggregate = {
  id: Maybe<Scalars['Int']>;
};

export type ExamPackTemplateDeleteFilter = {
  and: InputMaybe<Array<ExamPackTemplateDeleteFilter>>;
  id: InputMaybe<IdFilterComparison>;
  or: InputMaybe<Array<ExamPackTemplateDeleteFilter>>;
};

export type ExamPackTemplateDeleteResponse = {
  created: Maybe<Scalars['DateTime']>;
  disabled: Maybe<Scalars['DateTime']>;
  id: Maybe<Scalars['ID']>;
  parts: Maybe<Array<ExamPackTemplatePart>>;
  updated: Maybe<Scalars['DateTime']>;
};

export type ExamPackTemplateEdge = {
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the ExamPackTemplate */
  node: ExamPackTemplate;
};

export type ExamPackTemplateFilter = {
  and: InputMaybe<Array<ExamPackTemplateFilter>>;
  category: InputMaybe<ExamPackTemplateFilterCategoryFilter>;
  id: InputMaybe<IdFilterComparison>;
  or: InputMaybe<Array<ExamPackTemplateFilter>>;
};

export type ExamPackTemplateFilterCategoryFilter = {
  and: InputMaybe<Array<ExamPackTemplateFilterCategoryFilter>>;
  disabled: InputMaybe<DateFieldComparison>;
  education: InputMaybe<StringFieldComparison>;
  id: InputMaybe<IdFilterComparison>;
  name: InputMaybe<StringFieldComparison>;
  or: InputMaybe<Array<ExamPackTemplateFilterCategoryFilter>>;
};

export type ExamPackTemplateInput = {
  categoryId: Scalars['ID'];
  parts: Array<ExamPackTemplatePartInput>;
};

export type ExamPackTemplateMaxAggregate = {
  id: Maybe<Scalars['ID']>;
};

export type ExamPackTemplateMinAggregate = {
  id: Maybe<Scalars['ID']>;
};

export type ExamPackTemplatePart = {
  correctMarks: Scalars['Float'];
  passMarks: Scalars['Float'];
  sections: Array<ExamPackTemplatePartSection>;
  totalMarks: Scalars['Float'];
  totalQuestions: Scalars['Float'];
  totalTime: Scalars['Float'];
  wrongMarks: Scalars['Float'];
};

export type ExamPackTemplatePartInput = {
  correctMarks: Scalars['Float'];
  passMarks: Scalars['Float'];
  sections: Array<ExamPackTemplatePartSectionInput>;
  totalMarks: Scalars['Float'];
  totalQuestions: Scalars['Float'];
  totalTime: Scalars['Float'];
  wrongMarks: Scalars['Float'];
};

export type ExamPackTemplatePartSection = {
  levels: Array<ExamPackTemplatePartSectionLevel>;
  subjectId: Scalars['ID'];
  totalMarks: Scalars['Float'];
  totalQuestions: Scalars['Float'];
};

export type ExamPackTemplatePartSectionInput = {
  levels: Array<ExamPackTemplatePartSectionLevelInput>;
  subjectId: Scalars['ID'];
  totalMarks: Scalars['Float'];
  totalQuestions: Scalars['Float'];
};

export type ExamPackTemplatePartSectionLevel = {
  count: Scalars['Float'];
  value: Level;
};

export type ExamPackTemplatePartSectionLevelInput = {
  count: Scalars['Float'];
  value: Level;
};

export type ExamPackTemplateSort = {
  direction: SortDirection;
  field: ExamPackTemplateSortFields;
  nulls: InputMaybe<SortNulls>;
};

export enum ExamPackTemplateSortFields {
  Id = 'id'
}

export type ExamPackTemplateUpdateFilter = {
  and: InputMaybe<Array<ExamPackTemplateUpdateFilter>>;
  id: InputMaybe<IdFilterComparison>;
  or: InputMaybe<Array<ExamPackTemplateUpdateFilter>>;
};

export type ExamPackUpdateFilter = {
  and: InputMaybe<Array<ExamPackUpdateFilter>>;
  id: InputMaybe<IdFilterComparison>;
  or: InputMaybe<Array<ExamPackUpdateFilter>>;
};

export type IdFilterComparison = {
  eq: InputMaybe<Scalars['ID']>;
  gt: InputMaybe<Scalars['ID']>;
  gte: InputMaybe<Scalars['ID']>;
  iLike: InputMaybe<Scalars['ID']>;
  in: InputMaybe<Array<Scalars['ID']>>;
  is: InputMaybe<Scalars['Boolean']>;
  isNot: InputMaybe<Scalars['Boolean']>;
  like: InputMaybe<Scalars['ID']>;
  lt: InputMaybe<Scalars['ID']>;
  lte: InputMaybe<Scalars['ID']>;
  neq: InputMaybe<Scalars['ID']>;
  notILike: InputMaybe<Scalars['ID']>;
  notIn: InputMaybe<Array<Scalars['ID']>>;
  notLike: InputMaybe<Scalars['ID']>;
};

export enum Level {
  Easy = 'Easy',
  Hard = 'Hard',
  Medium = 'Medium'
}

export type LevelFilterComparison = {
  eq: InputMaybe<Level>;
  gt: InputMaybe<Level>;
  gte: InputMaybe<Level>;
  iLike: InputMaybe<Level>;
  in: InputMaybe<Array<Level>>;
  is: InputMaybe<Scalars['Boolean']>;
  isNot: InputMaybe<Scalars['Boolean']>;
  like: InputMaybe<Level>;
  lt: InputMaybe<Level>;
  lte: InputMaybe<Level>;
  neq: InputMaybe<Level>;
  notILike: InputMaybe<Level>;
  notIn: InputMaybe<Array<Level>>;
  notLike: InputMaybe<Level>;
};

export type Mutation = {
  addCategoriesToEntry: Entry;
  addCategoryUsersToCategory: Category;
  addQuestionsToSubject: Subject;
  addQuestionsToSubjectTopic: SubjectTopic;
  addSubEntriesToEntry: Entry;
  addTagsToQuestion: Question;
  addTopicsToSubject: Subject;
  addVideosToCategory: Category;
  createManyAnnouncements: Array<Announcement>;
  createManyArticles: Array<Article>;
  createManyCategories: Array<Category>;
  createManyCategoryUsers: Array<CategoryUser>;
  createManyEntries: Array<Entry>;
  createManyExamPackPapers: Array<ExamPackPaper>;
  createManyExamPackTemplates: Array<ExamPackTemplate>;
  createManyExamPacks: Array<ExamPack>;
  createManyQuestionTags: Array<QuestionTag>;
  createManyQuestions: Array<Question>;
  createManySubjectTopics: Array<SubjectTopic>;
  createManySubjects: Array<Subject>;
  createManyUserExamPackPaperOptions: Array<UserExamPackPaperOption>;
  createManyUserExamPackPapers: Array<UserExamPackPaper>;
  createManyVideos: Array<Video>;
  createOneAnnouncement: Announcement;
  createOneArticle: Article;
  createOneCategory: Category;
  createOneCategoryUser: CategoryUser;
  createOneEntry: Entry;
  createOneExamPack: ExamPack;
  createOneExamPackPaper: ExamPackPaper;
  createOneExamPackTemplate: ExamPackTemplate;
  createOneQuestion: Question;
  createOneQuestionTag: QuestionTag;
  createOneSubject: Subject;
  createOneSubjectTopic: SubjectTopic;
  createOneUserExamPackPaper: UserExamPackPaper;
  createOneUserExamPackPaperOption: UserExamPackPaperOption;
  createOneVideo: Video;
  deleteManyAnnouncements: DeleteManyResponse;
  deleteManyArticles: DeleteManyResponse;
  deleteManyCategories: DeleteManyResponse;
  deleteManyCategoryUsers: DeleteManyResponse;
  deleteManyEntries: DeleteManyResponse;
  deleteManyExamPackPapers: DeleteManyResponse;
  deleteManyExamPackTemplates: DeleteManyResponse;
  deleteManyExamPacks: DeleteManyResponse;
  deleteManyQuestionTags: DeleteManyResponse;
  deleteManyQuestions: DeleteManyResponse;
  deleteManySubjectTopics: DeleteManyResponse;
  deleteManySubjects: DeleteManyResponse;
  deleteManyUserExamPackPaperOptions: DeleteManyResponse;
  deleteManyUserExamPackPapers: DeleteManyResponse;
  deleteManyVideos: DeleteManyResponse;
  deleteOneAnnouncement: AnnouncementDeleteResponse;
  deleteOneArticle: ArticleDeleteResponse;
  deleteOneCategory: CategoryDeleteResponse;
  deleteOneCategoryUser: CategoryUserDeleteResponse;
  deleteOneEntry: EntryDeleteResponse;
  deleteOneExamPack: ExamPackDeleteResponse;
  deleteOneExamPackPaper: ExamPackPaperDeleteResponse;
  deleteOneExamPackTemplate: ExamPackTemplateDeleteResponse;
  deleteOneQuestion: QuestionDeleteResponse;
  deleteOneQuestionTag: QuestionTagDeleteResponse;
  deleteOneSubject: SubjectDeleteResponse;
  deleteOneSubjectTopic: SubjectTopicDeleteResponse;
  deleteOneUserExamPackPaper: UserExamPackPaperDeleteResponse;
  deleteOneUserExamPackPaperOption: UserExamPackPaperOptionDeleteResponse;
  deleteOneVideo: VideoDeleteResponse;
  setCategoriesOnEntry: Entry;
  setCategoryOnCategoryUser: CategoryUser;
  setCategoryOnExamPack: ExamPack;
  setCategoryOnExamPackTemplate: ExamPackTemplate;
  setCategoryOnUserExamPackPaper: UserExamPackPaper;
  setCategoryOnVideo: Video;
  setCategoryUsersOnCategory: Category;
  setEntryOnAnnouncement: Announcement;
  setEntryOnCategory: Category;
  setExamPackOnExamPackPaper: ExamPackPaper;
  setExamPackOnUserExamPackPaper: UserExamPackPaper;
  setExamPackPaperOnUserExamPackPaper: UserExamPackPaper;
  setExamPackTemplateOnCategory: Category;
  setQuestionOnQuestionTag: QuestionTag;
  setQuestionOnUserExamPackPaperOption: UserExamPackPaperOption;
  setQuestionsOnSubject: Subject;
  setQuestionsOnSubjectTopic: SubjectTopic;
  setSubEntriesOnEntry: Entry;
  setSubjectOnQuestion: Question;
  setSubjectOnSubjectTopic: SubjectTopic;
  setSubjectTopicOnQuestion: Question;
  setTagsOnQuestion: Question;
  setTopicsOnSubject: Subject;
  setUserExamPackPaperOnUserExamPackPaperOption: UserExamPackPaperOption;
  setUserOnCategoryUser: CategoryUser;
  setVideosOnCategory: Category;
  updateManyAnnouncements: UpdateManyResponse;
  updateManyArticles: UpdateManyResponse;
  updateManyCategories: UpdateManyResponse;
  updateManyCategoryUsers: UpdateManyResponse;
  updateManyEntries: UpdateManyResponse;
  updateManyExamPackPapers: UpdateManyResponse;
  updateManyExamPackTemplates: UpdateManyResponse;
  updateManyExamPacks: UpdateManyResponse;
  updateManyQuestionTags: UpdateManyResponse;
  updateManyQuestions: UpdateManyResponse;
  updateManySubjectTopics: UpdateManyResponse;
  updateManySubjects: UpdateManyResponse;
  updateManyUserExamPackPaperOptions: UpdateManyResponse;
  updateManyUserExamPackPapers: UpdateManyResponse;
  updateManyVideos: UpdateManyResponse;
  updateOneAnnouncement: Announcement;
  updateOneArticle: Article;
  updateOneCategory: Category;
  updateOneCategoryUser: CategoryUser;
  updateOneEntry: Entry;
  updateOneExamPack: ExamPack;
  updateOneExamPackPaper: ExamPackPaper;
  updateOneExamPackTemplate: ExamPackTemplate;
  updateOneQuestion: Question;
  updateOneQuestionTag: QuestionTag;
  updateOneSubject: Subject;
  updateOneSubjectTopic: SubjectTopic;
  updateOneUserExamPackPaper: UserExamPackPaper;
  updateOneUserExamPackPaperOption: UserExamPackPaperOption;
  updateOneVideo: Video;
};


export type MutationAddCategoriesToEntryArgs = {
  input: AddCategoriesToEntryInput;
};


export type MutationAddCategoryUsersToCategoryArgs = {
  input: AddCategoryUsersToCategoryInput;
};


export type MutationAddQuestionsToSubjectArgs = {
  input: AddQuestionsToSubjectInput;
};


export type MutationAddQuestionsToSubjectTopicArgs = {
  input: AddQuestionsToSubjectTopicInput;
};


export type MutationAddSubEntriesToEntryArgs = {
  input: AddSubEntriesToEntryInput;
};


export type MutationAddTagsToQuestionArgs = {
  input: AddTagsToQuestionInput;
};


export type MutationAddTopicsToSubjectArgs = {
  input: AddTopicsToSubjectInput;
};


export type MutationAddVideosToCategoryArgs = {
  input: AddVideosToCategoryInput;
};


export type MutationCreateManyAnnouncementsArgs = {
  input: CreateManyAnnouncementsInput;
};


export type MutationCreateManyArticlesArgs = {
  input: CreateManyArticlesInput;
};


export type MutationCreateManyCategoriesArgs = {
  input: CreateManyCategoriesInput;
};


export type MutationCreateManyCategoryUsersArgs = {
  input: CreateManyCategoryUsersInput;
};


export type MutationCreateManyEntriesArgs = {
  input: CreateManyEntriesInput;
};


export type MutationCreateManyExamPackPapersArgs = {
  input: CreateManyExamPackPapersInput;
};


export type MutationCreateManyExamPackTemplatesArgs = {
  input: CreateManyExamPackTemplatesInput;
};


export type MutationCreateManyExamPacksArgs = {
  input: CreateManyExamPacksInput;
};


export type MutationCreateManyQuestionTagsArgs = {
  input: CreateManyQuestionTagsInput;
};


export type MutationCreateManyQuestionsArgs = {
  input: CreateManyQuestionsInput;
};


export type MutationCreateManySubjectTopicsArgs = {
  input: CreateManySubjectTopicsInput;
};


export type MutationCreateManySubjectsArgs = {
  input: CreateManySubjectsInput;
};


export type MutationCreateManyUserExamPackPaperOptionsArgs = {
  input: CreateManyUserExamPackPaperOptionsInput;
};


export type MutationCreateManyUserExamPackPapersArgs = {
  input: CreateManyUserExamPackPapersInput;
};


export type MutationCreateManyVideosArgs = {
  input: CreateManyVideosInput;
};


export type MutationCreateOneAnnouncementArgs = {
  input: CreateOneAnnouncementInput;
};


export type MutationCreateOneArticleArgs = {
  input: CreateOneArticleInput;
};


export type MutationCreateOneCategoryArgs = {
  input: CreateOneCategoryInput;
};


export type MutationCreateOneCategoryUserArgs = {
  input: CreateOneCategoryUserInput;
};


export type MutationCreateOneEntryArgs = {
  input: CreateOneEntryInput;
};


export type MutationCreateOneExamPackArgs = {
  input: CreateOneExamPackInput;
};


export type MutationCreateOneExamPackPaperArgs = {
  input: CreateOneExamPackPaperInput;
};


export type MutationCreateOneExamPackTemplateArgs = {
  input: CreateOneExamPackTemplateInput;
};


export type MutationCreateOneQuestionArgs = {
  input: CreateOneQuestionInput;
};


export type MutationCreateOneQuestionTagArgs = {
  input: CreateOneQuestionTagInput;
};


export type MutationCreateOneSubjectArgs = {
  input: CreateOneSubjectInput;
};


export type MutationCreateOneSubjectTopicArgs = {
  input: CreateOneSubjectTopicInput;
};


export type MutationCreateOneUserExamPackPaperArgs = {
  input: CreateOneUserExamPackPaperInput;
};


export type MutationCreateOneUserExamPackPaperOptionArgs = {
  input: CreateOneUserExamPackPaperOptionInput;
};


export type MutationCreateOneVideoArgs = {
  input: CreateOneVideoInput;
};


export type MutationDeleteManyAnnouncementsArgs = {
  input: DeleteManyAnnouncementsInput;
};


export type MutationDeleteManyArticlesArgs = {
  input: DeleteManyArticlesInput;
};


export type MutationDeleteManyCategoriesArgs = {
  input: DeleteManyCategoriesInput;
};


export type MutationDeleteManyCategoryUsersArgs = {
  input: DeleteManyCategoryUsersInput;
};


export type MutationDeleteManyEntriesArgs = {
  input: DeleteManyEntriesInput;
};


export type MutationDeleteManyExamPackPapersArgs = {
  input: DeleteManyExamPackPapersInput;
};


export type MutationDeleteManyExamPackTemplatesArgs = {
  input: DeleteManyExamPackTemplatesInput;
};


export type MutationDeleteManyExamPacksArgs = {
  input: DeleteManyExamPacksInput;
};


export type MutationDeleteManyQuestionTagsArgs = {
  input: DeleteManyQuestionTagsInput;
};


export type MutationDeleteManyQuestionsArgs = {
  input: DeleteManyQuestionsInput;
};


export type MutationDeleteManySubjectTopicsArgs = {
  input: DeleteManySubjectTopicsInput;
};


export type MutationDeleteManySubjectsArgs = {
  input: DeleteManySubjectsInput;
};


export type MutationDeleteManyUserExamPackPaperOptionsArgs = {
  input: DeleteManyUserExamPackPaperOptionsInput;
};


export type MutationDeleteManyUserExamPackPapersArgs = {
  input: DeleteManyUserExamPackPapersInput;
};


export type MutationDeleteManyVideosArgs = {
  input: DeleteManyVideosInput;
};


export type MutationDeleteOneAnnouncementArgs = {
  input: DeleteOneAnnouncementInput;
};


export type MutationDeleteOneArticleArgs = {
  input: DeleteOneArticleInput;
};


export type MutationDeleteOneCategoryArgs = {
  input: DeleteOneCategoryInput;
};


export type MutationDeleteOneCategoryUserArgs = {
  input: DeleteOneCategoryUserInput;
};


export type MutationDeleteOneEntryArgs = {
  input: DeleteOneEntryInput;
};


export type MutationDeleteOneExamPackArgs = {
  input: DeleteOneExamPackInput;
};


export type MutationDeleteOneExamPackPaperArgs = {
  input: DeleteOneExamPackPaperInput;
};


export type MutationDeleteOneExamPackTemplateArgs = {
  input: DeleteOneExamPackTemplateInput;
};


export type MutationDeleteOneQuestionArgs = {
  input: DeleteOneQuestionInput;
};


export type MutationDeleteOneQuestionTagArgs = {
  input: DeleteOneQuestionTagInput;
};


export type MutationDeleteOneSubjectArgs = {
  input: DeleteOneSubjectInput;
};


export type MutationDeleteOneSubjectTopicArgs = {
  input: DeleteOneSubjectTopicInput;
};


export type MutationDeleteOneUserExamPackPaperArgs = {
  input: DeleteOneUserExamPackPaperInput;
};


export type MutationDeleteOneUserExamPackPaperOptionArgs = {
  input: DeleteOneUserExamPackPaperOptionInput;
};


export type MutationDeleteOneVideoArgs = {
  input: DeleteOneVideoInput;
};


export type MutationSetCategoriesOnEntryArgs = {
  input: SetCategoriesOnEntryInput;
};


export type MutationSetCategoryOnCategoryUserArgs = {
  input: SetCategoryOnCategoryUserInput;
};


export type MutationSetCategoryOnExamPackArgs = {
  input: SetCategoryOnExamPackInput;
};


export type MutationSetCategoryOnExamPackTemplateArgs = {
  input: SetCategoryOnExamPackTemplateInput;
};


export type MutationSetCategoryOnUserExamPackPaperArgs = {
  input: SetCategoryOnUserExamPackPaperInput;
};


export type MutationSetCategoryOnVideoArgs = {
  input: SetCategoryOnVideoInput;
};


export type MutationSetCategoryUsersOnCategoryArgs = {
  input: SetCategoryUsersOnCategoryInput;
};


export type MutationSetEntryOnAnnouncementArgs = {
  input: SetEntryOnAnnouncementInput;
};


export type MutationSetEntryOnCategoryArgs = {
  input: SetEntryOnCategoryInput;
};


export type MutationSetExamPackOnExamPackPaperArgs = {
  input: SetExamPackOnExamPackPaperInput;
};


export type MutationSetExamPackOnUserExamPackPaperArgs = {
  input: SetExamPackOnUserExamPackPaperInput;
};


export type MutationSetExamPackPaperOnUserExamPackPaperArgs = {
  input: SetExamPackPaperOnUserExamPackPaperInput;
};


export type MutationSetExamPackTemplateOnCategoryArgs = {
  input: SetExamPackTemplateOnCategoryInput;
};


export type MutationSetQuestionOnQuestionTagArgs = {
  input: SetQuestionOnQuestionTagInput;
};


export type MutationSetQuestionOnUserExamPackPaperOptionArgs = {
  input: SetQuestionOnUserExamPackPaperOptionInput;
};


export type MutationSetQuestionsOnSubjectArgs = {
  input: SetQuestionsOnSubjectInput;
};


export type MutationSetQuestionsOnSubjectTopicArgs = {
  input: SetQuestionsOnSubjectTopicInput;
};


export type MutationSetSubEntriesOnEntryArgs = {
  input: SetSubEntriesOnEntryInput;
};


export type MutationSetSubjectOnQuestionArgs = {
  input: SetSubjectOnQuestionInput;
};


export type MutationSetSubjectOnSubjectTopicArgs = {
  input: SetSubjectOnSubjectTopicInput;
};


export type MutationSetSubjectTopicOnQuestionArgs = {
  input: SetSubjectTopicOnQuestionInput;
};


export type MutationSetTagsOnQuestionArgs = {
  input: SetTagsOnQuestionInput;
};


export type MutationSetTopicsOnSubjectArgs = {
  input: SetTopicsOnSubjectInput;
};


export type MutationSetUserExamPackPaperOnUserExamPackPaperOptionArgs = {
  input: SetUserExamPackPaperOnUserExamPackPaperOptionInput;
};


export type MutationSetUserOnCategoryUserArgs = {
  input: SetUserOnCategoryUserInput;
};


export type MutationSetVideosOnCategoryArgs = {
  input: SetVideosOnCategoryInput;
};


export type MutationUpdateManyAnnouncementsArgs = {
  input: UpdateManyAnnouncementsInput;
};


export type MutationUpdateManyArticlesArgs = {
  input: UpdateManyArticlesInput;
};


export type MutationUpdateManyCategoriesArgs = {
  input: UpdateManyCategoriesInput;
};


export type MutationUpdateManyCategoryUsersArgs = {
  input: UpdateManyCategoryUsersInput;
};


export type MutationUpdateManyEntriesArgs = {
  input: UpdateManyEntriesInput;
};


export type MutationUpdateManyExamPackPapersArgs = {
  input: UpdateManyExamPackPapersInput;
};


export type MutationUpdateManyExamPackTemplatesArgs = {
  input: UpdateManyExamPackTemplatesInput;
};


export type MutationUpdateManyExamPacksArgs = {
  input: UpdateManyExamPacksInput;
};


export type MutationUpdateManyQuestionTagsArgs = {
  input: UpdateManyQuestionTagsInput;
};


export type MutationUpdateManyQuestionsArgs = {
  input: UpdateManyQuestionsInput;
};


export type MutationUpdateManySubjectTopicsArgs = {
  input: UpdateManySubjectTopicsInput;
};


export type MutationUpdateManySubjectsArgs = {
  input: UpdateManySubjectsInput;
};


export type MutationUpdateManyUserExamPackPaperOptionsArgs = {
  input: UpdateManyUserExamPackPaperOptionsInput;
};


export type MutationUpdateManyUserExamPackPapersArgs = {
  input: UpdateManyUserExamPackPapersInput;
};


export type MutationUpdateManyVideosArgs = {
  input: UpdateManyVideosInput;
};


export type MutationUpdateOneAnnouncementArgs = {
  input: UpdateOneAnnouncementInput;
};


export type MutationUpdateOneArticleArgs = {
  input: UpdateOneArticleInput;
};


export type MutationUpdateOneCategoryArgs = {
  input: UpdateOneCategoryInput;
};


export type MutationUpdateOneCategoryUserArgs = {
  input: UpdateOneCategoryUserInput;
};


export type MutationUpdateOneEntryArgs = {
  input: UpdateOneEntryInput;
};


export type MutationUpdateOneExamPackArgs = {
  input: UpdateOneExamPackInput;
};


export type MutationUpdateOneExamPackPaperArgs = {
  input: UpdateOneExamPackPaperInput;
};


export type MutationUpdateOneExamPackTemplateArgs = {
  input: UpdateOneExamPackTemplateInput;
};


export type MutationUpdateOneQuestionArgs = {
  input: UpdateOneQuestionInput;
};


export type MutationUpdateOneQuestionTagArgs = {
  input: UpdateOneQuestionTagInput;
};


export type MutationUpdateOneSubjectArgs = {
  input: UpdateOneSubjectInput;
};


export type MutationUpdateOneSubjectTopicArgs = {
  input: UpdateOneSubjectTopicInput;
};


export type MutationUpdateOneUserExamPackPaperArgs = {
  input: UpdateOneUserExamPackPaperInput;
};


export type MutationUpdateOneUserExamPackPaperOptionArgs = {
  input: UpdateOneUserExamPackPaperOptionInput;
};


export type MutationUpdateOneVideoArgs = {
  input: UpdateOneVideoInput;
};

export type PageInfo = {
  /** The cursor of the last returned record. */
  endCursor: Maybe<Scalars['ConnectionCursor']>;
  /** true if paging forward and there are more records. */
  hasNextPage: Maybe<Scalars['Boolean']>;
  /** true if paging backwards and there are more records. */
  hasPreviousPage: Maybe<Scalars['Boolean']>;
  /** The cursor of the first returned record. */
  startCursor: Maybe<Scalars['ConnectionCursor']>;
};

export enum PaymentType {
  Free = 'Free',
  Paid = 'Paid',
  Stars = 'Stars'
}

export type Query = {
  announcement: Maybe<Announcement>;
  announcements: AnnouncementConnection;
  article: Maybe<Article>;
  articles: ArticleConnection;
  categories: CategoryConnection;
  category: Maybe<Category>;
  categoryUser: Maybe<CategoryUser>;
  categoryUsers: CategoryUserConnection;
  entries: EntryConnection;
  entry: Maybe<Entry>;
  examPack: Maybe<ExamPack>;
  examPackPaper: Maybe<ExamPackPaper>;
  examPackPapers: ExamPackPaperConnection;
  examPackTemplate: Maybe<ExamPackTemplate>;
  examPackTemplates: ExamPackTemplateConnection;
  examPacks: ExamPackConnection;
  question: Maybe<Question>;
  questionTag: Maybe<QuestionTag>;
  questionTags: QuestionTagConnection;
  questions: QuestionConnection;
  subject: Maybe<Subject>;
  subjectTopic: Maybe<SubjectTopic>;
  subjectTopics: SubjectTopicConnection;
  subjects: SubjectConnection;
  user: Maybe<User>;
  userExamPackPaper: Maybe<UserExamPackPaper>;
  userExamPackPaperOption: Maybe<UserExamPackPaperOption>;
  userExamPackPaperOptions: UserExamPackPaperOptionConnection;
  userExamPackPapers: UserExamPackPaperConnection;
  users: UserConnection;
  video: Maybe<Video>;
  videos: VideoConnection;
};


export type QueryAnnouncementArgs = {
  id: Scalars['ID'];
};


export type QueryAnnouncementsArgs = {
  filter?: InputMaybe<AnnouncementFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<AnnouncementSort>>;
};


export type QueryArticleArgs = {
  id: Scalars['ID'];
};


export type QueryArticlesArgs = {
  filter?: InputMaybe<ArticleFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<ArticleSort>>;
};


export type QueryCategoriesArgs = {
  filter?: InputMaybe<CategoryFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<CategorySort>>;
};


export type QueryCategoryArgs = {
  id: Scalars['ID'];
};


export type QueryCategoryUserArgs = {
  id: Scalars['ID'];
};


export type QueryCategoryUsersArgs = {
  filter?: InputMaybe<CategoryUserFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<CategoryUserSort>>;
};


export type QueryEntriesArgs = {
  filter?: InputMaybe<EntryFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<EntrySort>>;
};


export type QueryEntryArgs = {
  id: Scalars['ID'];
};


export type QueryExamPackArgs = {
  id: Scalars['ID'];
};


export type QueryExamPackPaperArgs = {
  id: Scalars['ID'];
};


export type QueryExamPackPapersArgs = {
  filter?: InputMaybe<ExamPackPaperFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<ExamPackPaperSort>>;
};


export type QueryExamPackTemplateArgs = {
  id: Scalars['ID'];
};


export type QueryExamPackTemplatesArgs = {
  filter?: InputMaybe<ExamPackTemplateFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<ExamPackTemplateSort>>;
};


export type QueryExamPacksArgs = {
  filter?: InputMaybe<ExamPackFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<ExamPackSort>>;
};


export type QueryQuestionArgs = {
  id: Scalars['ID'];
};


export type QueryQuestionTagArgs = {
  id: Scalars['ID'];
};


export type QueryQuestionTagsArgs = {
  filter?: InputMaybe<QuestionTagFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<QuestionTagSort>>;
};


export type QueryQuestionsArgs = {
  filter?: InputMaybe<QuestionFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<QuestionSort>>;
};


export type QuerySubjectArgs = {
  id: Scalars['ID'];
};


export type QuerySubjectTopicArgs = {
  id: Scalars['ID'];
};


export type QuerySubjectTopicsArgs = {
  filter?: InputMaybe<SubjectTopicFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<SubjectTopicSort>>;
};


export type QuerySubjectsArgs = {
  filter?: InputMaybe<SubjectFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<SubjectSort>>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUserExamPackPaperArgs = {
  id: Scalars['ID'];
};


export type QueryUserExamPackPaperOptionArgs = {
  id: Scalars['ID'];
};


export type QueryUserExamPackPaperOptionsArgs = {
  filter?: InputMaybe<UserExamPackPaperOptionFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<UserExamPackPaperOptionSort>>;
};


export type QueryUserExamPackPapersArgs = {
  filter?: InputMaybe<UserExamPackPaperFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<UserExamPackPaperSort>>;
};


export type QueryUsersArgs = {
  filter?: InputMaybe<UserFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<UserSort>>;
};


export type QueryVideoArgs = {
  id: Scalars['ID'];
};


export type QueryVideosArgs = {
  filter?: InputMaybe<VideoFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<VideoSort>>;
};

export type Question = {
  created: Scalars['DateTime'];
  explanation: Scalars['String'];
  explanationHi: Scalars['String'];
  id: Scalars['ID'];
  level: Level;
  optionAnswer: Scalars['String'];
  options: Array<Scalars['String']>;
  optionsHi: Array<Scalars['String']>;
  subText: Scalars['String'];
  subTextHi: Scalars['String'];
  subject: Subject;
  subjectTopic: SubjectTopic;
  tags: Array<QuestionTag>;
  text: Scalars['String'];
  textHi: Scalars['String'];
  updated: Scalars['DateTime'];
  yearAppeared: Scalars['String'];
};


export type QuestionTagsArgs = {
  filter?: InputMaybe<QuestionTagFilter>;
  sorting?: InputMaybe<Array<QuestionTagSort>>;
};

export type QuestionAggregateGroupBy = {
  id: Maybe<Scalars['ID']>;
  level: Maybe<Level>;
};

export type QuestionConnection = {
  /** Array of edges. */
  edges: Array<QuestionEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type QuestionCountAggregate = {
  id: Maybe<Scalars['Int']>;
  level: Maybe<Scalars['Int']>;
};

export type QuestionDeleteFilter = {
  and: InputMaybe<Array<QuestionDeleteFilter>>;
  id: InputMaybe<IdFilterComparison>;
  level: InputMaybe<LevelFilterComparison>;
  or: InputMaybe<Array<QuestionDeleteFilter>>;
};

export type QuestionDeleteResponse = {
  created: Maybe<Scalars['DateTime']>;
  explanation: Maybe<Scalars['String']>;
  explanationHi: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
  level: Maybe<Level>;
  optionAnswer: Maybe<Scalars['String']>;
  options: Maybe<Array<Scalars['String']>>;
  optionsHi: Maybe<Array<Scalars['String']>>;
  subText: Maybe<Scalars['String']>;
  subTextHi: Maybe<Scalars['String']>;
  text: Maybe<Scalars['String']>;
  textHi: Maybe<Scalars['String']>;
  updated: Maybe<Scalars['DateTime']>;
  yearAppeared: Maybe<Scalars['String']>;
};

export type QuestionEdge = {
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the Question */
  node: Question;
};

export type QuestionFilter = {
  and: InputMaybe<Array<QuestionFilter>>;
  id: InputMaybe<IdFilterComparison>;
  level: InputMaybe<LevelFilterComparison>;
  or: InputMaybe<Array<QuestionFilter>>;
  subject: InputMaybe<QuestionFilterSubjectFilter>;
  subjectTopic: InputMaybe<QuestionFilterSubjectTopicFilter>;
};

export type QuestionFilterSubjectFilter = {
  and: InputMaybe<Array<QuestionFilterSubjectFilter>>;
  iconUrl: InputMaybe<StringFieldComparison>;
  id: InputMaybe<IdFilterComparison>;
  name: InputMaybe<StringFieldComparison>;
  or: InputMaybe<Array<QuestionFilterSubjectFilter>>;
};

export type QuestionFilterSubjectTopicFilter = {
  and: InputMaybe<Array<QuestionFilterSubjectTopicFilter>>;
  id: InputMaybe<IdFilterComparison>;
  name: InputMaybe<StringFieldComparison>;
  or: InputMaybe<Array<QuestionFilterSubjectTopicFilter>>;
};

export type QuestionInput = {
  explanation: Scalars['String'];
  explanationHi: Scalars['String'];
  level: Level;
  optionAnswer: Scalars['String'];
  options: Array<Scalars['String']>;
  optionsHi: Array<Scalars['String']>;
  subText: Scalars['String'];
  subTextHi: Scalars['String'];
  subjectId: Scalars['ID'];
  subjectTopicId: Scalars['ID'];
  text: Scalars['String'];
  textHi: Scalars['String'];
  yearAppeared: Scalars['String'];
};

export type QuestionMaxAggregate = {
  id: Maybe<Scalars['ID']>;
  level: Maybe<Level>;
};

export type QuestionMinAggregate = {
  id: Maybe<Scalars['ID']>;
  level: Maybe<Level>;
};

export type QuestionSort = {
  direction: SortDirection;
  field: QuestionSortFields;
  nulls: InputMaybe<SortNulls>;
};

export enum QuestionSortFields {
  Id = 'id',
  Level = 'level'
}

export type QuestionTag = {
  created: Scalars['DateTime'];
  id: Scalars['ID'];
  question: Maybe<Question>;
  tag: Scalars['String'];
  updated: Scalars['DateTime'];
};

export type QuestionTagAggregateGroupBy = {
  id: Maybe<Scalars['ID']>;
};

export type QuestionTagConnection = {
  /** Array of edges. */
  edges: Array<QuestionTagEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type QuestionTagCountAggregate = {
  id: Maybe<Scalars['Int']>;
};

export type QuestionTagDeleteFilter = {
  and: InputMaybe<Array<QuestionTagDeleteFilter>>;
  id: InputMaybe<IdFilterComparison>;
  or: InputMaybe<Array<QuestionTagDeleteFilter>>;
};

export type QuestionTagDeleteResponse = {
  created: Maybe<Scalars['DateTime']>;
  id: Maybe<Scalars['ID']>;
  tag: Maybe<Scalars['String']>;
  updated: Maybe<Scalars['DateTime']>;
};

export type QuestionTagEdge = {
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the QuestionTag */
  node: QuestionTag;
};

export type QuestionTagFilter = {
  and: InputMaybe<Array<QuestionTagFilter>>;
  id: InputMaybe<IdFilterComparison>;
  or: InputMaybe<Array<QuestionTagFilter>>;
  question: InputMaybe<QuestionTagFilterQuestionFilter>;
};

export type QuestionTagFilterQuestionFilter = {
  and: InputMaybe<Array<QuestionTagFilterQuestionFilter>>;
  id: InputMaybe<IdFilterComparison>;
  level: InputMaybe<LevelFilterComparison>;
  or: InputMaybe<Array<QuestionTagFilterQuestionFilter>>;
};

export type QuestionTagInput = {
  question: Scalars['String'];
  questionHi: Scalars['String'];
  tags: Scalars['String'];
};

export type QuestionTagMaxAggregate = {
  id: Maybe<Scalars['ID']>;
};

export type QuestionTagMinAggregate = {
  id: Maybe<Scalars['ID']>;
};

export type QuestionTagSort = {
  direction: SortDirection;
  field: QuestionTagSortFields;
  nulls: InputMaybe<SortNulls>;
};

export enum QuestionTagSortFields {
  Id = 'id'
}

export type QuestionTagUpdateFilter = {
  and: InputMaybe<Array<QuestionTagUpdateFilter>>;
  id: InputMaybe<IdFilterComparison>;
  or: InputMaybe<Array<QuestionTagUpdateFilter>>;
};

export type QuestionUpdateFilter = {
  and: InputMaybe<Array<QuestionUpdateFilter>>;
  id: InputMaybe<IdFilterComparison>;
  level: InputMaybe<LevelFilterComparison>;
  or: InputMaybe<Array<QuestionUpdateFilter>>;
};

export type SetCategoriesOnEntryInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetCategoryOnCategoryUserInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type SetCategoryOnExamPackInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type SetCategoryOnExamPackTemplateInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type SetCategoryOnUserExamPackPaperInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type SetCategoryOnVideoInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type SetCategoryUsersOnCategoryInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetEntryOnAnnouncementInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type SetEntryOnCategoryInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type SetExamPackOnExamPackPaperInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type SetExamPackOnUserExamPackPaperInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type SetExamPackPaperOnUserExamPackPaperInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type SetExamPackTemplateOnCategoryInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type SetQuestionOnQuestionTagInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type SetQuestionOnUserExamPackPaperOptionInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type SetQuestionsOnSubjectInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetQuestionsOnSubjectTopicInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetSubEntriesOnEntryInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetSubjectOnQuestionInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type SetSubjectOnSubjectTopicInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type SetSubjectTopicOnQuestionInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type SetTagsOnQuestionInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetTopicsOnSubjectInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetUserExamPackPaperOnUserExamPackPaperOptionInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type SetUserOnCategoryUserInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type SetVideosOnCategoryInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

/** Sort Directions */
export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

/** Sort Nulls Options */
export enum SortNulls {
  NullsFirst = 'NULLS_FIRST',
  NullsLast = 'NULLS_LAST'
}

export type StringFieldComparison = {
  eq: InputMaybe<Scalars['String']>;
  gt: InputMaybe<Scalars['String']>;
  gte: InputMaybe<Scalars['String']>;
  iLike: InputMaybe<Scalars['String']>;
  in: InputMaybe<Array<Scalars['String']>>;
  is: InputMaybe<Scalars['Boolean']>;
  isNot: InputMaybe<Scalars['Boolean']>;
  like: InputMaybe<Scalars['String']>;
  lt: InputMaybe<Scalars['String']>;
  lte: InputMaybe<Scalars['String']>;
  neq: InputMaybe<Scalars['String']>;
  notILike: InputMaybe<Scalars['String']>;
  notIn: InputMaybe<Array<Scalars['String']>>;
  notLike: InputMaybe<Scalars['String']>;
};

export type Subject = {
  created: Scalars['DateTime'];
  iconUrl: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  questions: SubjectQuestionsConnection;
  topics: Array<SubjectTopic>;
  updated: Scalars['DateTime'];
};


export type SubjectQuestionsArgs = {
  filter?: InputMaybe<QuestionFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<QuestionSort>>;
};


export type SubjectTopicsArgs = {
  filter?: InputMaybe<SubjectTopicFilter>;
  sorting?: InputMaybe<Array<SubjectTopicSort>>;
};

export type SubjectAggregateGroupBy = {
  iconUrl: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
  name: Maybe<Scalars['String']>;
};

export type SubjectConnection = {
  /** Array of edges. */
  edges: Array<SubjectEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type SubjectCountAggregate = {
  iconUrl: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
  name: Maybe<Scalars['Int']>;
};

export type SubjectDeleteFilter = {
  and: InputMaybe<Array<SubjectDeleteFilter>>;
  iconUrl: InputMaybe<StringFieldComparison>;
  id: InputMaybe<IdFilterComparison>;
  name: InputMaybe<StringFieldComparison>;
  or: InputMaybe<Array<SubjectDeleteFilter>>;
};

export type SubjectDeleteResponse = {
  created: Maybe<Scalars['DateTime']>;
  iconUrl: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
  name: Maybe<Scalars['String']>;
  updated: Maybe<Scalars['DateTime']>;
};

export type SubjectEdge = {
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the Subject */
  node: Subject;
};

export type SubjectFilter = {
  and: InputMaybe<Array<SubjectFilter>>;
  iconUrl: InputMaybe<StringFieldComparison>;
  id: InputMaybe<IdFilterComparison>;
  name: InputMaybe<StringFieldComparison>;
  or: InputMaybe<Array<SubjectFilter>>;
};

export type SubjectInput = {
  icon: UploadFile;
  name: Scalars['String'];
};

export type SubjectMaxAggregate = {
  iconUrl: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
  name: Maybe<Scalars['String']>;
};

export type SubjectMinAggregate = {
  iconUrl: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
  name: Maybe<Scalars['String']>;
};

export type SubjectQuestionsConnection = {
  /** Array of edges. */
  edges: Array<QuestionEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type SubjectSort = {
  direction: SortDirection;
  field: SubjectSortFields;
  nulls: InputMaybe<SortNulls>;
};

export enum SubjectSortFields {
  IconUrl = 'iconUrl',
  Id = 'id',
  Name = 'name'
}

export type SubjectTopic = {
  created: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  questions: SubjectTopicQuestionsConnection;
  subject: Maybe<Subject>;
  updated: Scalars['DateTime'];
};


export type SubjectTopicQuestionsArgs = {
  filter?: InputMaybe<QuestionFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<QuestionSort>>;
};

export type SubjectTopicAggregateGroupBy = {
  id: Maybe<Scalars['ID']>;
  name: Maybe<Scalars['String']>;
};

export type SubjectTopicConnection = {
  /** Array of edges. */
  edges: Array<SubjectTopicEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type SubjectTopicCountAggregate = {
  id: Maybe<Scalars['Int']>;
  name: Maybe<Scalars['Int']>;
};

export type SubjectTopicDeleteFilter = {
  and: InputMaybe<Array<SubjectTopicDeleteFilter>>;
  id: InputMaybe<IdFilterComparison>;
  name: InputMaybe<StringFieldComparison>;
  or: InputMaybe<Array<SubjectTopicDeleteFilter>>;
};

export type SubjectTopicDeleteResponse = {
  created: Maybe<Scalars['DateTime']>;
  id: Maybe<Scalars['ID']>;
  name: Maybe<Scalars['String']>;
  updated: Maybe<Scalars['DateTime']>;
};

export type SubjectTopicEdge = {
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the SubjectTopic */
  node: SubjectTopic;
};

export type SubjectTopicFilter = {
  and: InputMaybe<Array<SubjectTopicFilter>>;
  id: InputMaybe<IdFilterComparison>;
  name: InputMaybe<StringFieldComparison>;
  or: InputMaybe<Array<SubjectTopicFilter>>;
  subject: InputMaybe<SubjectTopicFilterSubjectFilter>;
};

export type SubjectTopicFilterSubjectFilter = {
  and: InputMaybe<Array<SubjectTopicFilterSubjectFilter>>;
  iconUrl: InputMaybe<StringFieldComparison>;
  id: InputMaybe<IdFilterComparison>;
  name: InputMaybe<StringFieldComparison>;
  or: InputMaybe<Array<SubjectTopicFilterSubjectFilter>>;
};

export type SubjectTopicInput = {
  name: Scalars['String'];
  subjectId: Scalars['ID'];
};

export type SubjectTopicMaxAggregate = {
  id: Maybe<Scalars['ID']>;
  name: Maybe<Scalars['String']>;
};

export type SubjectTopicMinAggregate = {
  id: Maybe<Scalars['ID']>;
  name: Maybe<Scalars['String']>;
};

export type SubjectTopicQuestionsConnection = {
  /** Array of edges. */
  edges: Array<QuestionEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type SubjectTopicSort = {
  direction: SortDirection;
  field: SubjectTopicSortFields;
  nulls: InputMaybe<SortNulls>;
};

export enum SubjectTopicSortFields {
  Id = 'id',
  Name = 'name'
}

export type SubjectTopicUpdateFilter = {
  and: InputMaybe<Array<SubjectTopicUpdateFilter>>;
  id: InputMaybe<IdFilterComparison>;
  name: InputMaybe<StringFieldComparison>;
  or: InputMaybe<Array<SubjectTopicUpdateFilter>>;
};

export type SubjectUpdateFilter = {
  and: InputMaybe<Array<SubjectUpdateFilter>>;
  iconUrl: InputMaybe<StringFieldComparison>;
  id: InputMaybe<IdFilterComparison>;
  name: InputMaybe<StringFieldComparison>;
  or: InputMaybe<Array<SubjectUpdateFilter>>;
};

export type UpdateAnnouncement = {
  /** The end DOB of eligible user */
  ageEndDate: InputMaybe<Scalars['DateTime']>;
  /** The start DOB of eligible user */
  ageStartDate: InputMaybe<Scalars['DateTime']>;
  applicationEndDate: InputMaybe<Scalars['DateTime']>;
  applicationStartDate: InputMaybe<Scalars['DateTime']>;
  content: InputMaybe<Scalars['String']>;
  created: InputMaybe<Scalars['DateTime']>;
  educationQualification: InputMaybe<Scalars['String']>;
  examEndDate: InputMaybe<Scalars['DateTime']>;
  examStartDate: InputMaybe<Scalars['DateTime']>;
  expiry: InputMaybe<Scalars['DateTime']>;
  id: InputMaybe<Scalars['ID']>;
  location: InputMaybe<Scalars['String']>;
  officialURL: InputMaybe<Scalars['String']>;
  qualificationDescription: InputMaybe<Scalars['String']>;
  title: InputMaybe<Scalars['String']>;
  type: InputMaybe<Scalars['String']>;
  updated: InputMaybe<Scalars['DateTime']>;
};

export type UpdateArticle = {
  content: InputMaybe<Scalars['String']>;
  created: InputMaybe<Scalars['DateTime']>;
  id: InputMaybe<Scalars['ID']>;
  title: InputMaybe<Scalars['String']>;
  updated: InputMaybe<Scalars['DateTime']>;
};

export type UpdateCategory = {
  created: InputMaybe<Scalars['DateTime']>;
  disabled: InputMaybe<Scalars['DateTime']>;
  education: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['ID']>;
  name: InputMaybe<Scalars['String']>;
  syllabus: InputMaybe<Scalars['String']>;
  updated: InputMaybe<Scalars['DateTime']>;
};

export type UpdateCategoryUser = {
  created: InputMaybe<Scalars['DateTime']>;
  id: InputMaybe<Scalars['ID']>;
  updated: InputMaybe<Scalars['DateTime']>;
  userId: InputMaybe<Scalars['ID']>;
};

export type UpdateEntry = {
  created: InputMaybe<Scalars['DateTime']>;
  disabled: InputMaybe<Scalars['DateTime']>;
  iconUrl: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['ID']>;
  name: InputMaybe<Scalars['String']>;
  parentId: InputMaybe<Scalars['ID']>;
  updated: InputMaybe<Scalars['DateTime']>;
};

export type UpdateExamPack = {
  created: InputMaybe<Scalars['DateTime']>;
  disabled: InputMaybe<Scalars['DateTime']>;
  discount: InputMaybe<Scalars['Float']>;
  id: InputMaybe<Scalars['ID']>;
  logoUrl: InputMaybe<Scalars['String']>;
  paymentType: InputMaybe<PaymentType>;
  price: InputMaybe<Scalars['Float']>;
  subTitle: InputMaybe<Scalars['String']>;
  testType: InputMaybe<Scalars['String']>;
  title: InputMaybe<Scalars['String']>;
  updated: InputMaybe<Scalars['DateTime']>;
};

export type UpdateExamPackPaper = {
  created: InputMaybe<Scalars['DateTime']>;
  disabled: InputMaybe<Scalars['DateTime']>;
  discount: InputMaybe<Scalars['Float']>;
  id: InputMaybe<Scalars['ID']>;
  parts: InputMaybe<Array<ExamPackPaperPartInput>>;
  paymentType: InputMaybe<PaymentType>;
  price: InputMaybe<Scalars['Float']>;
  title: InputMaybe<Scalars['String']>;
  updated: InputMaybe<Scalars['DateTime']>;
};

export type UpdateExamPackTemplate = {
  created: InputMaybe<Scalars['DateTime']>;
  disabled: InputMaybe<Scalars['DateTime']>;
  id: InputMaybe<Scalars['ID']>;
  parts: InputMaybe<Array<ExamPackTemplatePartInput>>;
  updated: InputMaybe<Scalars['DateTime']>;
};

export type UpdateManyAnnouncementsInput = {
  /** Filter used to find fields to update */
  filter: AnnouncementUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateAnnouncement;
};

export type UpdateManyArticlesInput = {
  /** Filter used to find fields to update */
  filter: ArticleUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateArticle;
};

export type UpdateManyCategoriesInput = {
  /** Filter used to find fields to update */
  filter: CategoryUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateCategory;
};

export type UpdateManyCategoryUsersInput = {
  /** Filter used to find fields to update */
  filter: CategoryUserUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateCategoryUser;
};

export type UpdateManyEntriesInput = {
  /** Filter used to find fields to update */
  filter: EntryUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateEntry;
};

export type UpdateManyExamPackPapersInput = {
  /** Filter used to find fields to update */
  filter: ExamPackPaperUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateExamPackPaper;
};

export type UpdateManyExamPackTemplatesInput = {
  /** Filter used to find fields to update */
  filter: ExamPackTemplateUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateExamPackTemplate;
};

export type UpdateManyExamPacksInput = {
  /** Filter used to find fields to update */
  filter: ExamPackUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateExamPack;
};

export type UpdateManyQuestionTagsInput = {
  /** Filter used to find fields to update */
  filter: QuestionTagUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateQuestionTag;
};

export type UpdateManyQuestionsInput = {
  /** Filter used to find fields to update */
  filter: QuestionUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateQuestion;
};

export type UpdateManyResponse = {
  /** The number of records updated. */
  updatedCount: Scalars['Int'];
};

export type UpdateManySubjectTopicsInput = {
  /** Filter used to find fields to update */
  filter: SubjectTopicUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateSubjectTopic;
};

export type UpdateManySubjectsInput = {
  /** Filter used to find fields to update */
  filter: SubjectUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateSubject;
};

export type UpdateManyUserExamPackPaperOptionsInput = {
  /** Filter used to find fields to update */
  filter: UserExamPackPaperOptionUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateUserExamPackPaperOption;
};

export type UpdateManyUserExamPackPapersInput = {
  /** Filter used to find fields to update */
  filter: UserExamPackPaperUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateUserExamPackPaper;
};

export type UpdateManyVideosInput = {
  /** Filter used to find fields to update */
  filter: VideoUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateVideo;
};

export type UpdateOneAnnouncementInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateAnnouncement;
};

export type UpdateOneArticleInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateArticle;
};

export type UpdateOneCategoryInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateCategory;
};

export type UpdateOneCategoryUserInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateCategoryUser;
};

export type UpdateOneEntryInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateEntry;
};

export type UpdateOneExamPackInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateExamPack;
};

export type UpdateOneExamPackPaperInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateExamPackPaper;
};

export type UpdateOneExamPackTemplateInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateExamPackTemplate;
};

export type UpdateOneQuestionInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateQuestion;
};

export type UpdateOneQuestionTagInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateQuestionTag;
};

export type UpdateOneSubjectInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateSubject;
};

export type UpdateOneSubjectTopicInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateSubjectTopic;
};

export type UpdateOneUserExamPackPaperInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateUserExamPackPaper;
};

export type UpdateOneUserExamPackPaperOptionInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateUserExamPackPaperOption;
};

export type UpdateOneVideoInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateVideo;
};

export type UpdateQuestion = {
  created: InputMaybe<Scalars['DateTime']>;
  explanation: InputMaybe<Scalars['String']>;
  explanationHi: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['ID']>;
  level: InputMaybe<Level>;
  optionAnswer: InputMaybe<Scalars['String']>;
  options: InputMaybe<Array<Scalars['String']>>;
  optionsHi: InputMaybe<Array<Scalars['String']>>;
  subText: InputMaybe<Scalars['String']>;
  subTextHi: InputMaybe<Scalars['String']>;
  text: InputMaybe<Scalars['String']>;
  textHi: InputMaybe<Scalars['String']>;
  updated: InputMaybe<Scalars['DateTime']>;
  yearAppeared: InputMaybe<Scalars['String']>;
};

export type UpdateQuestionTag = {
  created: InputMaybe<Scalars['DateTime']>;
  id: InputMaybe<Scalars['ID']>;
  tag: InputMaybe<Scalars['String']>;
  updated: InputMaybe<Scalars['DateTime']>;
};

export type UpdateSubject = {
  created: InputMaybe<Scalars['DateTime']>;
  iconUrl: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['ID']>;
  name: InputMaybe<Scalars['String']>;
  updated: InputMaybe<Scalars['DateTime']>;
};

export type UpdateSubjectTopic = {
  created: InputMaybe<Scalars['DateTime']>;
  id: InputMaybe<Scalars['ID']>;
  name: InputMaybe<Scalars['String']>;
  updated: InputMaybe<Scalars['DateTime']>;
};

export type UpdateUserExamPackPaper = {
  created: InputMaybe<Scalars['DateTime']>;
  id: InputMaybe<Scalars['ID']>;
  submitted: InputMaybe<Scalars['DateTime']>;
  updated: InputMaybe<Scalars['DateTime']>;
  userId: InputMaybe<Scalars['ID']>;
};

export type UpdateUserExamPackPaperOption = {
  created: InputMaybe<Scalars['DateTime']>;
  id: InputMaybe<Scalars['ID']>;
  option: InputMaybe<Scalars['String']>;
  updated: InputMaybe<Scalars['DateTime']>;
};

export type UpdateVideo = {
  URL: InputMaybe<Scalars['String']>;
  created: InputMaybe<Scalars['DateTime']>;
  id: InputMaybe<Scalars['ID']>;
  remarks: InputMaybe<Scalars['String']>;
  title: InputMaybe<Scalars['String']>;
  updated: InputMaybe<Scalars['DateTime']>;
};

export type UploadFile = {
  body: Scalars['String'];
  filename: Scalars['String'];
  mimetype: Scalars['String'];
};

export type User = {
  created: Scalars['DateTime'];
  email: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastSignInAt: Scalars['DateTime'];
  phone: Maybe<Scalars['String']>;
  rawUserMetaData: Scalars['JSON'];
  updated: Scalars['DateTime'];
};

export type UserAggregateGroupBy = {
  email: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
  phone: Maybe<Scalars['String']>;
};

export type UserConnection = {
  /** Array of edges. */
  edges: Array<UserEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type UserCountAggregate = {
  email: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
  phone: Maybe<Scalars['Int']>;
};

export type UserEdge = {
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the User */
  node: User;
};

export type UserExamPackPaper = {
  category: Category;
  created: Scalars['DateTime'];
  examPack: ExamPack;
  examPackPaper: ExamPackPaper;
  id: Scalars['ID'];
  submitted: Maybe<Scalars['DateTime']>;
  updated: Scalars['DateTime'];
  userId: Scalars['ID'];
};

export type UserExamPackPaperAggregateGroupBy = {
  id: Maybe<Scalars['ID']>;
  userId: Maybe<Scalars['ID']>;
};

export type UserExamPackPaperConnection = {
  /** Array of edges. */
  edges: Array<UserExamPackPaperEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type UserExamPackPaperCountAggregate = {
  id: Maybe<Scalars['Int']>;
  userId: Maybe<Scalars['Int']>;
};

export type UserExamPackPaperDeleteFilter = {
  and: InputMaybe<Array<UserExamPackPaperDeleteFilter>>;
  id: InputMaybe<IdFilterComparison>;
  or: InputMaybe<Array<UserExamPackPaperDeleteFilter>>;
  userId: InputMaybe<IdFilterComparison>;
};

export type UserExamPackPaperDeleteResponse = {
  created: Maybe<Scalars['DateTime']>;
  id: Maybe<Scalars['ID']>;
  submitted: Maybe<Scalars['DateTime']>;
  updated: Maybe<Scalars['DateTime']>;
  userId: Maybe<Scalars['ID']>;
};

export type UserExamPackPaperEdge = {
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the UserExamPackPaper */
  node: UserExamPackPaper;
};

export type UserExamPackPaperFilter = {
  and: InputMaybe<Array<UserExamPackPaperFilter>>;
  category: InputMaybe<UserExamPackPaperFilterCategoryFilter>;
  examPack: InputMaybe<UserExamPackPaperFilterExamPackFilter>;
  examPackPaper: InputMaybe<UserExamPackPaperFilterExamPackPaperFilter>;
  id: InputMaybe<IdFilterComparison>;
  or: InputMaybe<Array<UserExamPackPaperFilter>>;
  userId: InputMaybe<IdFilterComparison>;
};

export type UserExamPackPaperFilterCategoryFilter = {
  and: InputMaybe<Array<UserExamPackPaperFilterCategoryFilter>>;
  disabled: InputMaybe<DateFieldComparison>;
  education: InputMaybe<StringFieldComparison>;
  id: InputMaybe<IdFilterComparison>;
  name: InputMaybe<StringFieldComparison>;
  or: InputMaybe<Array<UserExamPackPaperFilterCategoryFilter>>;
};

export type UserExamPackPaperFilterExamPackFilter = {
  and: InputMaybe<Array<UserExamPackPaperFilterExamPackFilter>>;
  id: InputMaybe<IdFilterComparison>;
  or: InputMaybe<Array<UserExamPackPaperFilterExamPackFilter>>;
};

export type UserExamPackPaperFilterExamPackPaperFilter = {
  and: InputMaybe<Array<UserExamPackPaperFilterExamPackPaperFilter>>;
  id: InputMaybe<IdFilterComparison>;
  or: InputMaybe<Array<UserExamPackPaperFilterExamPackPaperFilter>>;
};

export type UserExamPackPaperInput = {
  categoryId: Scalars['ID'];
  examPackId: Scalars['ID'];
  examPackPaperId: Scalars['ID'];
};

export type UserExamPackPaperMaxAggregate = {
  id: Maybe<Scalars['ID']>;
  userId: Maybe<Scalars['ID']>;
};

export type UserExamPackPaperMinAggregate = {
  id: Maybe<Scalars['ID']>;
  userId: Maybe<Scalars['ID']>;
};

export type UserExamPackPaperOption = {
  created: Scalars['DateTime'];
  id: Scalars['ID'];
  option: Scalars['String'];
  question: Question;
  updated: Scalars['DateTime'];
  userExamPackPaper: UserExamPackPaper;
};

export type UserExamPackPaperOptionAggregateGroupBy = {
  id: Maybe<Scalars['ID']>;
};

export type UserExamPackPaperOptionConnection = {
  /** Array of edges. */
  edges: Array<UserExamPackPaperOptionEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type UserExamPackPaperOptionCountAggregate = {
  id: Maybe<Scalars['Int']>;
};

export type UserExamPackPaperOptionDeleteFilter = {
  and: InputMaybe<Array<UserExamPackPaperOptionDeleteFilter>>;
  id: InputMaybe<IdFilterComparison>;
  or: InputMaybe<Array<UserExamPackPaperOptionDeleteFilter>>;
};

export type UserExamPackPaperOptionDeleteResponse = {
  created: Maybe<Scalars['DateTime']>;
  id: Maybe<Scalars['ID']>;
  option: Maybe<Scalars['String']>;
  updated: Maybe<Scalars['DateTime']>;
};

export type UserExamPackPaperOptionEdge = {
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the UserExamPackPaperOption */
  node: UserExamPackPaperOption;
};

export type UserExamPackPaperOptionFilter = {
  and: InputMaybe<Array<UserExamPackPaperOptionFilter>>;
  id: InputMaybe<IdFilterComparison>;
  or: InputMaybe<Array<UserExamPackPaperOptionFilter>>;
  question: InputMaybe<UserExamPackPaperOptionFilterQuestionFilter>;
  userExamPackPaper: InputMaybe<UserExamPackPaperOptionFilterUserExamPackPaperFilter>;
};

export type UserExamPackPaperOptionFilterQuestionFilter = {
  and: InputMaybe<Array<UserExamPackPaperOptionFilterQuestionFilter>>;
  id: InputMaybe<IdFilterComparison>;
  level: InputMaybe<LevelFilterComparison>;
  or: InputMaybe<Array<UserExamPackPaperOptionFilterQuestionFilter>>;
};

export type UserExamPackPaperOptionFilterUserExamPackPaperFilter = {
  and: InputMaybe<Array<UserExamPackPaperOptionFilterUserExamPackPaperFilter>>;
  id: InputMaybe<IdFilterComparison>;
  or: InputMaybe<Array<UserExamPackPaperOptionFilterUserExamPackPaperFilter>>;
  userId: InputMaybe<IdFilterComparison>;
};

export type UserExamPackPaperOptionInput = {
  option: Scalars['String'];
  questionId: Scalars['ID'];
  userExamPackPaperId: Scalars['ID'];
};

export type UserExamPackPaperOptionMaxAggregate = {
  id: Maybe<Scalars['ID']>;
};

export type UserExamPackPaperOptionMinAggregate = {
  id: Maybe<Scalars['ID']>;
};

export type UserExamPackPaperOptionSort = {
  direction: SortDirection;
  field: UserExamPackPaperOptionSortFields;
  nulls: InputMaybe<SortNulls>;
};

export enum UserExamPackPaperOptionSortFields {
  Id = 'id'
}

export type UserExamPackPaperOptionUpdateFilter = {
  and: InputMaybe<Array<UserExamPackPaperOptionUpdateFilter>>;
  id: InputMaybe<IdFilterComparison>;
  or: InputMaybe<Array<UserExamPackPaperOptionUpdateFilter>>;
};

export type UserExamPackPaperSort = {
  direction: SortDirection;
  field: UserExamPackPaperSortFields;
  nulls: InputMaybe<SortNulls>;
};

export enum UserExamPackPaperSortFields {
  Id = 'id',
  UserId = 'userId'
}

export type UserExamPackPaperUpdateFilter = {
  and: InputMaybe<Array<UserExamPackPaperUpdateFilter>>;
  id: InputMaybe<IdFilterComparison>;
  or: InputMaybe<Array<UserExamPackPaperUpdateFilter>>;
  userId: InputMaybe<IdFilterComparison>;
};

export type UserFilter = {
  and: InputMaybe<Array<UserFilter>>;
  email: InputMaybe<StringFieldComparison>;
  id: InputMaybe<IdFilterComparison>;
  or: InputMaybe<Array<UserFilter>>;
  phone: InputMaybe<StringFieldComparison>;
};

export type UserMaxAggregate = {
  email: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
  phone: Maybe<Scalars['String']>;
};

export type UserMinAggregate = {
  email: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
  phone: Maybe<Scalars['String']>;
};

export type UserSort = {
  direction: SortDirection;
  field: UserSortFields;
  nulls: InputMaybe<SortNulls>;
};

export enum UserSortFields {
  Email = 'email',
  Id = 'id',
  Phone = 'phone'
}

export type Video = {
  URL: Scalars['String'];
  category: Category;
  created: Scalars['DateTime'];
  id: Scalars['ID'];
  remarks: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updated: Scalars['DateTime'];
};

export type VideoAggregateGroupBy = {
  URL: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
  remarks: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
};

export type VideoConnection = {
  /** Array of edges. */
  edges: Array<VideoEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type VideoCountAggregate = {
  URL: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
  remarks: Maybe<Scalars['Int']>;
  title: Maybe<Scalars['Int']>;
};

export type VideoDeleteFilter = {
  URL: InputMaybe<StringFieldComparison>;
  and: InputMaybe<Array<VideoDeleteFilter>>;
  id: InputMaybe<IdFilterComparison>;
  or: InputMaybe<Array<VideoDeleteFilter>>;
  remarks: InputMaybe<StringFieldComparison>;
  title: InputMaybe<StringFieldComparison>;
};

export type VideoDeleteResponse = {
  URL: Maybe<Scalars['String']>;
  created: Maybe<Scalars['DateTime']>;
  id: Maybe<Scalars['ID']>;
  remarks: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
  updated: Maybe<Scalars['DateTime']>;
};

export type VideoEdge = {
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the Video */
  node: Video;
};

export type VideoFilter = {
  URL: InputMaybe<StringFieldComparison>;
  and: InputMaybe<Array<VideoFilter>>;
  category: InputMaybe<VideoFilterCategoryFilter>;
  id: InputMaybe<IdFilterComparison>;
  or: InputMaybe<Array<VideoFilter>>;
  remarks: InputMaybe<StringFieldComparison>;
  title: InputMaybe<StringFieldComparison>;
};

export type VideoFilterCategoryFilter = {
  and: InputMaybe<Array<VideoFilterCategoryFilter>>;
  disabled: InputMaybe<DateFieldComparison>;
  education: InputMaybe<StringFieldComparison>;
  id: InputMaybe<IdFilterComparison>;
  name: InputMaybe<StringFieldComparison>;
  or: InputMaybe<Array<VideoFilterCategoryFilter>>;
};

export type VideoInput = {
  categoryId: Scalars['ID'];
  remarks: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  url: Scalars['String'];
};

export type VideoMaxAggregate = {
  URL: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
  remarks: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
};

export type VideoMinAggregate = {
  URL: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
  remarks: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
};

export type VideoSort = {
  direction: SortDirection;
  field: VideoSortFields;
  nulls: InputMaybe<SortNulls>;
};

export enum VideoSortFields {
  Url = 'URL',
  Id = 'id',
  Remarks = 'remarks',
  Title = 'title'
}

export type VideoUpdateFilter = {
  URL: InputMaybe<StringFieldComparison>;
  and: InputMaybe<Array<VideoUpdateFilter>>;
  id: InputMaybe<IdFilterComparison>;
  or: InputMaybe<Array<VideoUpdateFilter>>;
  remarks: InputMaybe<StringFieldComparison>;
  title: InputMaybe<StringFieldComparison>;
};

export type AnnouncementsQueryVariables = Exact<{ [key: string]: never; }>;


export type AnnouncementsQuery = { announcements: { pageInfo: { hasNextPage: boolean | null | undefined, hasPreviousPage: boolean | null | undefined, startCursor: string | null | undefined, endCursor: string | null | undefined }, edges: Array<{ cursor: string, node: { title: string, content: string, type: string, qualificationDescription: string, educationQualification: string, officialURL: string, location: string, applicationStartDate: Date, applicationEndDate: Date, ageStartDate: Date, ageEndDate: Date, examStartDate: Date, examEndDate: Date, expiry: Date, id: string, created: Date, updated: Date, entry: { id: string, name: string } | null | undefined } }> } };

export type CreateOneAnnouncementMutationVariables = Exact<{
  input: CreateOneAnnouncementInput;
}>;


export type CreateOneAnnouncementMutation = { createOneAnnouncement: { id: string } };

export type UpdateOneAnnouncementMutationVariables = Exact<{
  input: UpdateOneAnnouncementInput;
}>;


export type UpdateOneAnnouncementMutation = { updateOneAnnouncement: { id: string } };

export type DeleteOneAnnouncementMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteOneAnnouncementMutation = { deleteOneAnnouncement: { id: string | null | undefined } };

export type AriclesQueryVariables = Exact<{ [key: string]: never; }>;


export type AriclesQuery = { articles: { pageInfo: { hasNextPage: boolean | null | undefined, hasPreviousPage: boolean | null | undefined, startCursor: string | null | undefined, endCursor: string | null | undefined }, edges: Array<{ cursor: string, node: { id: string, title: string, content: string, created: Date, updated: Date } }> } };

export type CreateOneArticleMutationVariables = Exact<{
  input: CreateOneArticleInput;
}>;


export type CreateOneArticleMutation = { createOneArticle: { id: string, title: string, content: string, created: Date, updated: Date } };

export type UpdateOneArticleMutationVariables = Exact<{
  input: UpdateOneArticleInput;
}>;


export type UpdateOneArticleMutation = { updateOneArticle: { id: string, title: string, content: string, created: Date, updated: Date } };

export type DeleteOneArticleMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteOneArticleMutation = { deleteOneArticle: { id: string | null | undefined } };

export type CreateOneCategoryMutationVariables = Exact<{
  input: CreateOneCategoryInput;
}>;


export type CreateOneCategoryMutation = { createOneCategory: { id: string } };

export type DeleteOneCategoryMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteOneCategoryMutation = { deleteOneCategory: { id: string | null | undefined } };

export type EntriesQueryVariables = Exact<{ [key: string]: never; }>;


export type EntriesQuery = { entries: { pageInfo: { hasNextPage: boolean | null | undefined, hasPreviousPage: boolean | null | undefined, startCursor: string | null | undefined, endCursor: string | null | undefined }, edges: Array<{ cursor: string, node: { id: string, parentId: string | null | undefined, name: string, iconUrl: string, disabled: Date | null | undefined, created: Date, updated: Date, categories: Array<{ id: string, name: string, education: string, syllabus: string | null | undefined, disabled: Date | null | undefined, updated: Date, examPackTemplate: { id: string } | null | undefined }> } }> } };

export type CreateOneEntryMutationVariables = Exact<{
  input: CreateOneEntryInput;
}>;


export type CreateOneEntryMutation = { createOneEntry: { id: string, parentId: string | null | undefined, name: string, iconUrl: string, disabled: Date | null | undefined, created: Date, updated: Date } };

export type DeleteOneEntryMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteOneEntryMutation = { deleteOneEntry: { id: string | null | undefined } };

export type SubjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type SubjectsQuery = { subjects: { pageInfo: { hasNextPage: boolean | null | undefined, hasPreviousPage: boolean | null | undefined, startCursor: string | null | undefined, endCursor: string | null | undefined }, edges: Array<{ cursor: string, node: { id: string, name: string, iconUrl: string, created: Date, updated: Date } }> } };

export type TemplatesQueryVariables = Exact<{ [key: string]: never; }>;


export type TemplatesQuery = { categories: { pageInfo: { hasNextPage: boolean | null | undefined, hasPreviousPage: boolean | null | undefined, startCursor: string | null | undefined, endCursor: string | null | undefined }, edges: Array<{ cursor: string, node: { id: string, name: string, examPackTemplate: { id: string, disabled: Date | null | undefined, created: Date, updated: Date } | null | undefined } }> } };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { users: { pageInfo: { hasNextPage: boolean | null | undefined, hasPreviousPage: boolean | null | undefined, startCursor: string | null | undefined, endCursor: string | null | undefined }, edges: Array<{ cursor: string, node: { id: string, email: string | null | undefined, phone: string | null | undefined, lastSignInAt: Date, rawUserMetaData: any, created: Date, updated: Date } }> } };

export type VideosQueryVariables = Exact<{ [key: string]: never; }>;


export type VideosQuery = { videos: { pageInfo: { hasNextPage: boolean | null | undefined, hasPreviousPage: boolean | null | undefined, startCursor: string | null | undefined, endCursor: string | null | undefined }, edges: Array<{ cursor: string, node: { id: string, remarks: string | null | undefined, title: string, URL: string, created: Date, updated: Date, category: { id: string, name: string } } }> } };

export type CreateOneVideoMutationVariables = Exact<{
  input: CreateOneVideoInput;
}>;


export type CreateOneVideoMutation = { createOneVideo: { id: string, remarks: string | null | undefined, title: string, URL: string, created: Date, updated: Date } };

export type UpdateOneVideoMutationVariables = Exact<{
  input: UpdateOneVideoInput;
}>;


export type UpdateOneVideoMutation = { updateOneVideo: { id: string, remarks: string | null | undefined, title: string, URL: string, created: Date, updated: Date } };

export type DeleteOneVideoMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteOneVideoMutation = { deleteOneVideo: { id: string | null | undefined } };


export const AnnouncementsDocument = gql`
    query Announcements {
  announcements {
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      cursor
      node {
        title
        content
        type
        qualificationDescription
        educationQualification
        officialURL
        location
        applicationStartDate
        applicationEndDate
        ageStartDate
        ageEndDate
        examStartDate
        examEndDate
        expiry
        id
        entry {
          id
          name
        }
        created
        updated
      }
    }
  }
}
    `;
export const CreateOneAnnouncementDocument = gql`
    mutation CreateOneAnnouncement($input: CreateOneAnnouncementInput!) {
  createOneAnnouncement(input: $input) {
    id
  }
}
    `;
export const UpdateOneAnnouncementDocument = gql`
    mutation UpdateOneAnnouncement($input: UpdateOneAnnouncementInput!) {
  updateOneAnnouncement(input: $input) {
    id
  }
}
    `;
export const DeleteOneAnnouncementDocument = gql`
    mutation DeleteOneAnnouncement($id: ID!) {
  deleteOneAnnouncement(input: {id: $id}) {
    id
  }
}
    `;
export const AriclesDocument = gql`
    query Aricles {
  articles {
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      cursor
      node {
        id
        title
        content
        created
        updated
      }
    }
  }
}
    `;
export const CreateOneArticleDocument = gql`
    mutation CreateOneArticle($input: CreateOneArticleInput!) {
  createOneArticle(input: $input) {
    id
    title
    content
    created
    updated
  }
}
    `;
export const UpdateOneArticleDocument = gql`
    mutation UpdateOneArticle($input: UpdateOneArticleInput!) {
  updateOneArticle(input: $input) {
    id
    title
    content
    created
    updated
  }
}
    `;
export const DeleteOneArticleDocument = gql`
    mutation DeleteOneArticle($id: ID!) {
  deleteOneArticle(input: {id: $id}) {
    id
  }
}
    `;
export const CreateOneCategoryDocument = gql`
    mutation createOneCategory($input: CreateOneCategoryInput!) {
  createOneCategory(input: $input) {
    id
  }
}
    `;
export const DeleteOneCategoryDocument = gql`
    mutation deleteOneCategory($id: ID!) {
  deleteOneCategory(input: {id: $id}) {
    id
  }
}
    `;
export const EntriesDocument = gql`
    query entries {
  entries(filter: {parentId: {is: null}}) {
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      node {
        id
        parentId
        name
        iconUrl
        disabled
        created
        updated
        categories {
          id
          name
          education
          syllabus
          disabled
          disabled
          updated
          examPackTemplate {
            id
          }
        }
      }
      cursor
    }
  }
}
    `;
export const CreateOneEntryDocument = gql`
    mutation createOneEntry($input: CreateOneEntryInput!) {
  createOneEntry(input: $input) {
    id
    parentId
    name
    iconUrl
    disabled
    created
    updated
  }
}
    `;
export const DeleteOneEntryDocument = gql`
    mutation deleteOneEntry($id: ID!) {
  deleteOneEntry(input: {id: $id}) {
    id
  }
}
    `;
export const SubjectsDocument = gql`
    query subjects {
  subjects {
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      cursor
      node {
        id
        name
        iconUrl
        created
        updated
      }
    }
  }
}
    `;
export const TemplatesDocument = gql`
    query templates {
  categories {
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      cursor
      node {
        id
        name
        examPackTemplate {
          id
          disabled
          created
          updated
        }
      }
    }
  }
}
    `;
export const UsersDocument = gql`
    query users {
  users(filter: {email: {notLike: "admin@joinuniform.com"}}) {
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      cursor
      node {
        id
        email
        phone
        lastSignInAt
        rawUserMetaData
        created
        updated
      }
    }
  }
}
    `;
export const VideosDocument = gql`
    query Videos {
  videos {
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      cursor
      node {
        id
        remarks
        title
        URL
        category {
          id
          name
        }
        created
        updated
      }
    }
  }
}
    `;
export const CreateOneVideoDocument = gql`
    mutation CreateOneVideo($input: CreateOneVideoInput!) {
  createOneVideo(input: $input) {
    id
    remarks
    title
    URL
    created
    updated
  }
}
    `;
export const UpdateOneVideoDocument = gql`
    mutation UpdateOneVideo($input: UpdateOneVideoInput!) {
  updateOneVideo(input: $input) {
    id
    remarks
    title
    URL
    created
    updated
  }
}
    `;
export const DeleteOneVideoDocument = gql`
    mutation DeleteOneVideo($id: ID!) {
  deleteOneVideo(input: {id: $id}) {
    id
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    Announcements(variables?: AnnouncementsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AnnouncementsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AnnouncementsQuery>(AnnouncementsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Announcements', 'query');
    },
    CreateOneAnnouncement(variables: CreateOneAnnouncementMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateOneAnnouncementMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateOneAnnouncementMutation>(CreateOneAnnouncementDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreateOneAnnouncement', 'mutation');
    },
    UpdateOneAnnouncement(variables: UpdateOneAnnouncementMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateOneAnnouncementMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateOneAnnouncementMutation>(UpdateOneAnnouncementDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'UpdateOneAnnouncement', 'mutation');
    },
    DeleteOneAnnouncement(variables: DeleteOneAnnouncementMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteOneAnnouncementMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteOneAnnouncementMutation>(DeleteOneAnnouncementDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'DeleteOneAnnouncement', 'mutation');
    },
    Aricles(variables?: AriclesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AriclesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AriclesQuery>(AriclesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Aricles', 'query');
    },
    CreateOneArticle(variables: CreateOneArticleMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateOneArticleMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateOneArticleMutation>(CreateOneArticleDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreateOneArticle', 'mutation');
    },
    UpdateOneArticle(variables: UpdateOneArticleMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateOneArticleMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateOneArticleMutation>(UpdateOneArticleDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'UpdateOneArticle', 'mutation');
    },
    DeleteOneArticle(variables: DeleteOneArticleMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteOneArticleMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteOneArticleMutation>(DeleteOneArticleDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'DeleteOneArticle', 'mutation');
    },
    createOneCategory(variables: CreateOneCategoryMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateOneCategoryMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateOneCategoryMutation>(CreateOneCategoryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createOneCategory', 'mutation');
    },
    deleteOneCategory(variables: DeleteOneCategoryMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteOneCategoryMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteOneCategoryMutation>(DeleteOneCategoryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteOneCategory', 'mutation');
    },
    entries(variables?: EntriesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<EntriesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<EntriesQuery>(EntriesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'entries', 'query');
    },
    createOneEntry(variables: CreateOneEntryMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateOneEntryMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateOneEntryMutation>(CreateOneEntryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createOneEntry', 'mutation');
    },
    deleteOneEntry(variables: DeleteOneEntryMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteOneEntryMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteOneEntryMutation>(DeleteOneEntryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteOneEntry', 'mutation');
    },
    subjects(variables?: SubjectsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SubjectsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SubjectsQuery>(SubjectsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'subjects', 'query');
    },
    templates(variables?: TemplatesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TemplatesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TemplatesQuery>(TemplatesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'templates', 'query');
    },
    users(variables?: UsersQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UsersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<UsersQuery>(UsersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'users', 'query');
    },
    Videos(variables?: VideosQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<VideosQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<VideosQuery>(VideosDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Videos', 'query');
    },
    CreateOneVideo(variables: CreateOneVideoMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateOneVideoMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateOneVideoMutation>(CreateOneVideoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreateOneVideo', 'mutation');
    },
    UpdateOneVideo(variables: UpdateOneVideoMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateOneVideoMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateOneVideoMutation>(UpdateOneVideoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'UpdateOneVideo', 'mutation');
    },
    DeleteOneVideo(variables: DeleteOneVideoMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteOneVideoMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteOneVideoMutation>(DeleteOneVideoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'DeleteOneVideo', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;