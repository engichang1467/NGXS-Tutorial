import { State, Action, StateContext, Selector } from "@ngxs/store";
import { Tutorial } from "../models/tutorial.model";
import { AddTutorial, RemoveTutorial } from "../actions/tutorial.actions";

/**
 * Create State Model
 *      - include additional properties based on our needs
 */
export class TutorialStateModel {
    tutorials: Tutorial[];
}

/**
 * Use State Decorator
 *      - define a name & default values based on the state model
 */
@State<TutorialStateModel>({
    name: 'tutorials',
    defaults: {
        tutorials: []
    }
})

export class TutorialState {

    /**
     * @Selector() 
     *      - allows you to create functions to return data
     *      - return specific results from your data
     *  
     * @param state 
     * 
     *      - returning all the tutorials
     *      - we can run filter on them to reurn only specific results
     */
    @Selector()
    static getTutorials(state: TutorialStateModel) {
        return state.tutorials;
    }

    /**
     * @Action()
     *      - handle dispatched actions
     *      
     *      - define 2 actions for adding a tutorial & removing one 
     *      - both actions invlude a payload
     *             - They both require data in order to handle the action appropriately
     * 
     *      Note:
     *          - use getState() to get the current state, setState() & patchState()
     *          - using patchState() instead of setState() as it helps reduce the necessary code
     */
    @Action(AddTutorial)
    add({getState, patchState }: StateContext<TutorialStateModel>, { payload }: AddTutorial) {
        const state = getState();
        patchState({
            tutorials: [...state.tutorials, payload]
        })
    }

    @Action(RemoveTutorial)
    remove({getState, patchState }: StateContext<TutorialStateModel>, { payload }: RemoveTutorial) {
        patchState({
            tutorials: getState().tutorials.filter(a => a.name != payload)
        })
    }
}