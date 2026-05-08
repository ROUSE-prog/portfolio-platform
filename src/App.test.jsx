import React from "react";
import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/vitest";
import App from "./App";

test("renders the app title", () => {
  render(<App />);
  expect(screen.getByText("Personal Project Showcase App")).toBeInTheDocument();
});

test("displays starter projects", () => {
  render(<App />);
  expect(screen.getByText("Project 1")).toBeInTheDocument();
  expect(screen.getByText("Project 2")).toBeInTheDocument();
  expect(screen.getByText("Project 3")).toBeInTheDocument();
});

test("adds a new project", async () => {
  const user = userEvent.setup();
  render(<App />);

  await user.type(screen.getByLabelText("Title"), "Weatherware");
  await user.type(screen.getByLabelText("Description"), "A weather outfit app");
  await user.click(screen.getByRole("button", { name: "Add" }));

  expect(screen.getByText("Weatherware")).toBeInTheDocument();
  expect(screen.getByText("A weather outfit app")).toBeInTheDocument();
});

test("filters projects by search term", async () => {
  const user = userEvent.setup();
  render(<App />);

  await user.type(screen.getByPlaceholderText("Search Projects"), "Project 1");

  expect(screen.getByText("Project 1")).toBeInTheDocument();
  expect(screen.queryByText("Project 2")).not.toBeInTheDocument();
  expect(screen.queryByText("Project 3")).not.toBeInTheDocument();
});