## It is good practice to write the JOINs first.

-  Here's why:

    First, identify which tables contain the info you need.

    Then, create JOINs between them to connect the data correctly (like a big dataset).

    This gives you a “combined view” of all relevant data.

    After that, you can write:

        SELECT to "print"/output what you want.

        WHERE to filter.

        GROUP BY, HAVING, etc. to summarize.

    ✅ Think of the JOINs like assembling your Lego blocks before painting them.


## Does the WHERE always refer to the FROM?

- Yes — but more specifically:

    WHERE filters rows before grouping or aggregation.

    It refers to columns available from the joined tables.

    You can use WHERE to filter:

        specific values (Age > 30)

        ranges (Start BETWEEN ...)

        relationships (SSN IN (...))

    🔍 If you want to filter aggregated values (like count, sum), use HAVING instead.

## What does GROUP BY do?

GROUP BY groups rows by the values of one or more columns, and then lets you apply aggregate functions (like SUM, COUNT, AVG) to each group.

Example:
```sql
    SELECT Gender, COUNT(*) FROM patient GROUP BY Gender;
```
This gives:
Gender	COUNT(*)
male	800
female	900

→ It tells you how many male and female patients exist.

More complex:
```sql
    SELECT Physician, SUM(Cost)
    FROM undergoes
    JOIN treatment ON undergoes.Treatment = treatment.Code
    GROUP BY Physician;
```

→ Gives you the total cost per doctor.

    Think of GROUP BY as: "Group all rows that share the same value of X, and summarize their Y values."

## Summary:
Clause	Purpose
FROM	Base table(s) you're working with
JOIN	Add related data from other tables
WHERE	Filter rows (before aggregation)
GROUP BY	Combine rows by shared values (e.g., per patient, per doctor)
HAVING	Filter after aggregation (e.g., doctors with >1 patient)
SELECT	Choose what to show ("print") — individual or aggregated values
