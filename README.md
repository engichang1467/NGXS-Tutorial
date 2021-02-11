# NGXS Tutorial

Learning how to use state management (NGXS) in Angular.

## State Management Concepts

* Action

    - A command which should trigger something to happen

    - the result of something that has already happened

```Typescript
export class AddTutorial {
    static readonly type = '[TUTORIAL] Add';

    constructor(public payload: Tutorial) {}
}

// Tutorial is a model
```

* Store

    - A global state manager that represents our app's entire data state tree

        - We change the state of the store by disatching actions

* State

    - classes along with decorators to describe metadata and action mappings

```Typescript
@State<TutorialStateModel>({
    name: 'tutorials',
    defaults: {
        tutorials: []
    }
})

export class TutorialState {}
```

* Select

    - functions that slice a specific portion of the state from the global state container.

```Typescript
@Selector()
static getTutorials(state: TutorialStateModel) {
    return state.tutorials;
}
```

This sample Angular app takes in the name and url of a tutorial, and present it in hyperlink format once the user submit.

## References

- [Link for the tutorials](https://www.youtube.com/watch?v=SfiO3bDUK7Q)

- [Frontend State Management](https://nitin15j.medium.com/frontend-state-management-44169546a2f7)

- [Introduction to NGXS - Angular State Management](https://medium.com/front-end-weekly/introduction-to-ngxs-angular-state-management-2516b2d9917e)