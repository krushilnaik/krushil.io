import { gql } from "@apollo/client";

export const typedefs = gql`
  type Color {
    hex: String!
  }

  type RichText {
    markdown: String!
  }

  type Asset {
    url: String!
    height: Int!
    width: Int!
  }

  type Project {
    id: String!
    title: String!
    slug: String!
    techStack: [Tech]
    desktopScreenshot: Asset
    liveSite: String
    githubRepo: String!
    description: RichText
    backgroundColor: Color!
  }

  type Tech {
    id: String!
    title: String!
    borderColor: Color!
  }
`;

export const GET_ALL_PROJECT_SUMMARIES = gql`
  query {
    projects {
      id
      slug
      title
      techStack {
        ... on Tech {
          id
          title
        }
      }
      desktopScreenshot {
        url
        width
        height
      }
    }
  }
`;

export const GET_SINGLE_PROJECT = gql`
  query MyQuery($slug: String!) {
    project(where: { slug: $slug }) {
      title
      isWIP
      githubRepo
      liveSite
      backgroundColor {
        hex
      }
      description {
        markdown
      }
      desktopScreenshot {
        url
        width
        height
      }
      techStack {
        ... on Tech {
          id
          title
          borderColor {
            hex
          }
        }
      }
    }
  }
`;
